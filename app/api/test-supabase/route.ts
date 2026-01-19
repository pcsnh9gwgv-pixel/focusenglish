import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Configurar Edge Runtime para Cloudflare Pages
export const runtime = 'edge'

export async function GET() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const resendKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.NOTIFICATION_EMAIL;

    // Verificar variables de entorno
    const envCheck = {
      NEXT_PUBLIC_SUPABASE_URL: !!supabaseUrl ? '✅ Configurada' : '❌ Falta',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: !!supabaseKey ? '✅ Configurada' : '❌ Falta',
      RESEND_API_KEY: !!resendKey ? '✅ Configurada' : '❌ Falta',
      NOTIFICATION_EMAIL: !!notificationEmail ? `✅ ${notificationEmail}` : '❌ Falta',
    };

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({
        success: false,
        message: 'Variables de Supabase no configuradas',
        env: envCheck
      });
    }

    // Intentar conectar a Supabase
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Intentar hacer un SELECT simple
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .select('count')
      .limit(1);

    if (error) {
      return NextResponse.json({
        success: false,
        message: 'Error al conectar con Supabase',
        error: error.message,
        errorCode: error.code,
        errorDetails: error.details,
        env: envCheck
      });
    }

    // Intentar un INSERT de prueba (luego lo borramos)
    const testEmail = `test-${Date.now()}@test.com`;
    const { data: insertData, error: insertError } = await supabase
      .from('newsletter_subscribers')
      .insert([
        {
          email: testEmail,
          subscribed_at: new Date().toISOString(),
          source: 'api_test'
        }
      ])
      .select();

    if (insertError) {
      return NextResponse.json({
        success: false,
        message: 'Error al insertar en Supabase',
        error: insertError.message,
        errorCode: insertError.code,
        errorDetails: insertError.details,
        hint: insertError.hint,
        env: envCheck
      });
    }

    // Borrar el registro de prueba
    await supabase
      .from('newsletter_subscribers')
      .delete()
      .eq('email', testEmail);

    return NextResponse.json({
      success: true,
      message: '✅ Todo funciona correctamente',
      env: envCheck,
      testResult: 'INSERT y DELETE funcionan correctamente'
    });

  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: 'Error general',
      error: error.message,
      stack: error.stack
    });
  }
}
