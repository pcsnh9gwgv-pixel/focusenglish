import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

// Configurar Edge Runtime para Cloudflare Pages
export const runtime = 'edge'

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

    // ============================================
    // ENVIAR EMAILS CON RESEND
    // ============================================
    
    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.NOTIFICATION_EMAIL;
    
    console.log('📧 RESEND_API_KEY existe:', !!resendApiKey);
    console.log('📧 NOTIFICATION_EMAIL:', notificationEmail);
    
    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);
        console.log('📧 Cliente Resend creado');
        
        // 1. Email de confirmación al usuario
        console.log('📧 Enviando email al usuario:', emailTrimmed);
        const userEmailResult = await resend.emails.send({
          from: 'Focus English <no-reply@focus-on-english.com>',
          to: emailTrimmed,
          subject: '¡Gracias por tu interés en Focus English! 🎉',
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
                .button { display: inline-block; padding: 12px 30px; background: #7c3aed; color: white; text-decoration: none; border-radius: 8px; margin: 20px 0; }
                .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>🎯 Focus English</h1>
                  <p>Cursos de inglés especializados</p>
                </div>
                <div class="content">
                  <h2>¡Gracias por registrarte! 🎉</h2>
                  <p>Hola,</p>
                  <p>Estamos emocionados de que te hayas registrado para recibir noticias sobre <strong>Focus English</strong>.</p>
                  
                  <p><strong>¿Qué puedes esperar?</strong></p>
                  <ul>
                    <li>✅ Cursos especializados para trabajar, viajar o exámenes oficiales</li>
                    <li>⚡ Programas intensivos de 90 días con resultados medibles</li>
                    <li>🌟 Metodología personalizada adaptada a tu nivel</li>
                  </ul>
                  
                  <p>Te avisaremos tan pronto como lancemos oficialmente.</p>
                  
                  <div style="text-align: center;">
                    <a href="https://www.focus-on-english.com" class="button">Visitar nuestro sitio web</a>
                  </div>
                </div>
                <div class="footer">
                  <p>© 2026 Focus English. Todos los derechos reservados.</p>
                  <p>Has recibido este email porque te registraste en www.focus-on-english.com</p>
                </div>
              </div>
            </body>
            </html>
          `
        });
        console.log('✅ Email al usuario enviado:', userEmailResult);

        // 2. Email de notificación para ti (admin)
        if (notificationEmail) {
          console.log('📧 Enviando notificación al admin:', notificationEmail);
          const adminEmailResult = await resend.emails.send({
            from: 'Focus English Notifications <notifications@focus-on-english.com>',
            to: notificationEmail,
            subject: '🔔 Nuevo suscriptor en Focus English',
            html: `
              <!DOCTYPE html>
              <html>
              <head>
                <meta charset="utf-8">
                <style>
                  body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                  .container { max-width: 600px; margin: 0 auto; padding: 20px; background: #f8f9fa; border-radius: 10px; }
                  .info { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
                  .label { font-weight: bold; color: #7c3aed; }
                </style>
              </head>
              <body>
                <div class="container">
                  <h2>🎉 Nuevo suscriptor registrado</h2>
                  <div class="info">
                    <p><span class="label">Email:</span> ${emailTrimmed}</p>
                    <p><span class="label">Fecha:</span> ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}</p>
                    <p><span class="label">Fuente:</span> Página "Próximamente"</p>
                  </div>
                  <p>Este usuario está esperando el lanzamiento oficial de Focus English.</p>
                  <p><a href="https://supabase.com/dashboard">Ver en Supabase →</a></p>
                </div>
              </body>
              </html>
            `
          });
          console.log('✅ Email al admin enviado:', adminEmailResult);
        }

        console.log('✅ Todos los emails enviados correctamente');
      } catch (emailError: any) {
        console.error('⚠️ Error al enviar emails (pero el registro fue exitoso):', emailError);
        console.error('⚠️ Error details:', emailError.message);
      }
    } else {
      console.log('ℹ️ RESEND_API_KEY no configurado - emails no enviados');
    }

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
