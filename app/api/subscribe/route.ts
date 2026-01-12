import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

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

    // ============================================
    // ENVIAR EMAILS CON RESEND
    // ============================================
    
    // Solo enviar emails si RESEND_API_KEY está configurado
    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.NOTIFICATION_EMAIL;
    
    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);
        
        // 1. Email de confirmación al usuario
        await resend.emails.send({
          from: 'Focus English <no-reply@focus-on-english.com>',
          to: email,
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
                  
                  <p>Mientras tanto, síguenos en nuestras redes sociales para no perderte ninguna actualización.</p>
                  
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

        // 2. Email de notificación para ti (admin)
        if (notificationEmail) {
          await resend.emails.send({
            from: 'Focus English Notifications <no-reply@focus-on-english.com>',
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
                    <p><span class="label">Email:</span> ${email}</p>
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
        }

        console.log('✅ Emails enviados correctamente');
      } catch (emailError) {
        // No fallar si hay error en el envío de emails
        console.error('⚠️ Error al enviar emails (pero el registro fue exitoso):', emailError);
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

  } catch (error) {
    console.error('Error en API subscribe:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
