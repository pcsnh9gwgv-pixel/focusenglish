// Template de email de bienvenida para suscriptores

export function getWelcomeEmailHTML(email: string): string {
  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bienvenido a Focus English</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; max-width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 16px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%); padding: 40px 30px; text-align: center; border-radius: 16px 16px 0 0;">
              <div style="display: inline-block; width: 60px; height: 60px; background: rgba(255, 255, 255, 0.2); border-radius: 12px; margin-bottom: 16px;">
                <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 32px; font-weight: bold; color: white;">F</div>
              </div>
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">Focus English</h1>
            </td>
          </tr>
          
          <!-- Body -->
          <tr>
            <td style="padding: 40px 30px;">
              <h2 style="margin: 0 0 16px 0; color: #1f2937; font-size: 24px; font-weight: bold;">¡Gracias por tu interés! 🎉</h2>
              
              <p style="margin: 0 0 16px 0; color: #4b5563; font-size: 16px; line-height: 1.6;">
                Hola,
              </p>
              
              <p style="margin: 0 0 16px 0; color: #4b5563; font-size: 16px; line-height: 1.6;">
                Gracias por registrarte en <strong>Focus English</strong>. Estamos emocionados de tenerte en nuestra lista de espera.
              </p>
              
              <p style="margin: 0 0 24px 0; color: #4b5563; font-size: 16px; line-height: 1.6;">
                Estamos trabajando en algo increíble: <strong>cursos de inglés especializados</strong> diseñados para ayudarte a alcanzar tus objetivos en solo 90 días.
              </p>
              
              <!-- Features -->
              <div style="background-color: #f9fafb; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
                <h3 style="margin: 0 0 16px 0; color: #1f2937; font-size: 18px; font-weight: bold;">¿Qué te espera?</h3>
                
                <div style="margin-bottom: 12px;">
                  <span style="font-size: 20px; margin-right: 8px;">🎯</span>
                  <strong style="color: #1f2937;">Especializado:</strong>
                  <span style="color: #6b7280;"> Cursos adaptados a tus objetivos específicos</span>
                </div>
                
                <div style="margin-bottom: 12px;">
                  <span style="font-size: 20px; margin-right: 8px;">⚡</span>
                  <strong style="color: #1f2937;">90 Días:</strong>
                  <span style="color: #6b7280;"> Programas intensivos con resultados medibles</span>
                </div>
                
                <div>
                  <span style="font-size: 20px; margin-right: 8px;">🌟</span>
                  <strong style="color: #1f2937;">Personalizado:</strong>
                  <span style="color: #6b7280;"> Metodología adaptada a tu nivel y ritmo</span>
                </div>
              </div>
              
              <p style="margin: 0 0 16px 0; color: #4b5563; font-size: 16px; line-height: 1.6;">
                Serás uno de los primeros en enterarte cuando lancemos oficialmente. Te enviaremos un email en cuanto estemos listos.
              </p>
              
              <p style="margin: 0; color: #4b5563; font-size: 16px; line-height: 1.6;">
                ¡Gracias por tu paciencia! 🚀
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 30px; text-align: center; border-radius: 0 0 16px 16px;">
              <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">
                © 2026 Focus English. Todos los derechos reservados.
              </p>
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                Te registraste con: ${email}
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export function getWelcomeEmailText(email: string): string {
  return `
¡Gracias por tu interés!

Hola,

Gracias por registrarte en Focus English. Estamos emocionados de tenerte en nuestra lista de espera.

Estamos trabajando en algo increíble: cursos de inglés especializados diseñados para ayudarte a alcanzar tus objetivos en solo 90 días.

¿Qué te espera?

🎯 Especializado: Cursos adaptados a tus objetivos específicos
⚡ 90 Días: Programas intensivos con resultados medibles
🌟 Personalizado: Metodología adaptada a tu nivel y ritmo

Serás uno de los primeros en enterarte cuando lancemos oficialmente. Te enviaremos un email en cuanto estemos listos.

¡Gracias por tu paciencia! 🚀

© 2026 Focus English. Todos los derechos reservados.
Te registraste con: ${email}
  `;
}
