// Template de notificación para el administrador

export function getAdminNotificationHTML(email: string, source: string): string {
  const now = new Date().toLocaleString('es-ES', { 
    timeZone: 'Europe/Madrid',
    dateStyle: 'full',
    timeStyle: 'short'
  });

  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nuevo Suscriptor</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; max-width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 16px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 40px 30px; text-align: center; border-radius: 16px 16px 0 0;">
              <div style="font-size: 48px; margin-bottom: 8px;">🎉</div>
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: bold;">Nuevo Suscriptor</h1>
            </td>
          </tr>
          
          <!-- Body -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="margin: 0 0 24px 0; color: #4b5563; font-size: 16px; line-height: 1.6;">
                Alguien nuevo se ha registrado en la página "Próximamente" de Focus English.
              </p>
              
              <!-- Info Box -->
              <div style="background-color: #f9fafb; border-left: 4px solid #7c3aed; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                <div style="margin-bottom: 12px;">
                  <strong style="color: #6b7280; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Email:</strong>
                  <div style="color: #1f2937; font-size: 18px; font-weight: bold; margin-top: 4px;">${email}</div>
                </div>
                
                <div style="margin-bottom: 12px;">
                  <strong style="color: #6b7280; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Origen:</strong>
                  <div style="color: #1f2937; font-size: 16px; margin-top: 4px;">${source}</div>
                </div>
                
                <div>
                  <strong style="color: #6b7280; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Fecha y Hora:</strong>
                  <div style="color: #1f2937; font-size: 16px; margin-top: 4px;">${now}</div>
                </div>
              </div>
              
              <!-- CTA Button -->
              <div style="text-align: center; margin-bottom: 24px;">
                <a href="https://supabase.com/dashboard" style="display: inline-block; background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%); color: white; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: bold; font-size: 16px;">
                  Ver en Supabase
                </a>
              </div>
              
              <p style="margin: 0; color: #6b7280; font-size: 14px; text-align: center; line-height: 1.6;">
                Este es un email automático generado por tu aplicación Focus English.
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 20px 30px; text-align: center; border-radius: 0 0 16px 16px;">
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                © 2026 Focus English Admin Notifications
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

export function getAdminNotificationText(email: string, source: string): string {
  const now = new Date().toLocaleString('es-ES', { 
    timeZone: 'Europe/Madrid',
    dateStyle: 'full',
    timeStyle: 'short'
  });

  return `
🎉 Nuevo Suscriptor en Focus English

Alguien nuevo se ha registrado en la página "Próximamente".

Detalles:
---------
Email: ${email}
Origen: ${source}
Fecha y Hora: ${now}

Ver en Supabase: https://supabase.com/dashboard

Este es un email automático generado por tu aplicación Focus English.
  `;
}
