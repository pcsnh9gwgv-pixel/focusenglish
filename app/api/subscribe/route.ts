import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: Request) {
  try {
    // Leer el body
    const body = await request.json();
    console.log('📨 Body recibido:', body);
    
    const { email } = body;
    console.log('📧 Email extraído:', email);
    console.log('📧 Tipo de email:', typeof email);
    console.log('📧 Email existe:', !!email);
    console.log('📧 Email length:', email?.length);

    // Validación más detallada
    if (!email) {
      return NextResponse.json(
        { error: 'Email no proporcionado' },
        { status: 400 }
      );
    }

    if (typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email debe ser un string' },
        { status: 400 }
      );
    }

    const emailTrimmed = email.trim();
    console.log('📧 Email trimmed:', emailTrimmed);
    console.log('📧 Incluye @:', emailTrimmed.includes('@'));

    if (!emailTrimmed.includes('@')) {
      return NextResponse.json(
        { error: 'Email inválido - no contiene @' },
        { status: 400 }
      );
    }

    // Validación regex más completa
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailTrimmed)) {
      return NextResponse.json(
        { error: 'Email inválido - formato incorrecto' },
        { status: 400 }
      );
    }

    // Verificar variables de entorno
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    console.log('🔑 Supabase URL existe:', !!supabaseUrl);
    console.log('🔑 Supabase Key existe:', !!supabaseKey);

    if (!supabaseUrl || !supabaseKey) {
      console.error('❌ Variables de Supabase no configuradas');
      return NextResponse.json(
        { error: 'Configuración del servidor incompleta' },
        { status: 500 }
      );
    }

    // Crear cliente de Supabase
    const supabase = createClient(supabaseUrl, supabaseKey);
    console.log('✅ Cliente Supabase creado');

    // Preparar datos para insertar
    const dataToInsert = {
      email: emailTrimmed.toLowerCase(),
      subscribed_at: new Date().toISOString(),
      source: 'coming_soon_page'
    };

    console.log('💾 Datos a insertar:', dataToInsert);

    // Guardar email en la base de datos
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([dataToInsert])
      .select();

    console.log('📊 Resultado Supabase data:', data);
    console.log('📊 Resultado Supabase error:', error);

    if (error) {
      console.error('❌ Error al guardar en Supabase:', {
        message: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint
      });
      
      // Si el error es por duplicado
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'Este email ya está registrado' },
          { status: 409 }
        );
      }

      return NextResponse.json(
        { 
          error: 'Error al guardar el email',
          details: error.message,
          code: error.code
        },
        { status: 500 }
      );
    }

    console.log('✅ Email guardado exitosamente');

    return NextResponse.json(
      { 
        success: true, 
        message: '¡Gracias por suscribirte!',
        data 
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('💥 Error general en API subscribe:', error);
    return NextResponse.json(
      { 
        error: 'Error interno del servidor',
        message: error.message 
      },
      { status: 500 }
    );
  }
}
