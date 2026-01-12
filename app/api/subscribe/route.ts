import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Verificar que las variables de entorno estén configuradas
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error('Variables de Supabase no configuradas');
      return NextResponse.json(
        { error: 'Configuración del servidor incompleta' },
        { status: 500 }
      );
    }

    // Crear cliente de Supabase
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Guardar email en la base de datos
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([
        {
          email: email.toLowerCase().trim(),
          subscribed_at: new Date().toISOString(),
          source: 'coming_soon_page'
        }
      ])
      .select();

    if (error) {
      console.error('Error al guardar en Supabase:', error);
      
      // Si el error es por duplicado, devolver mensaje especial
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'Este email ya está registrado' },
          { status: 409 }
        );
      }

      return NextResponse.json(
        { error: 'Error al guardar el email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: '¡Gracias por suscribirte!',
        data 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error en API subscribe:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
