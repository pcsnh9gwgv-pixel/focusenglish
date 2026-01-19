import { NextRequest, NextResponse } from 'next/server'

// Configurar Edge Runtime para Cloudflare Pages
export const runtime = 'edge'

export async function POST(request: NextRequest) {
  try {
    const { text, letter } = await request.json()

    if (!text) {
      return NextResponse.json(
        { error: 'Text is required' },
        { status: 400 }
      )
    }

    // Usar ElevenLabs API para generar audio de alta calidad
    const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY
    
    // Si no hay API key, usar un fallback con una API gratuita
    if (!ELEVENLABS_API_KEY) {
      // Fallback: generar usando Google TTS (gratuito pero de menor calidad)
      // O devolver un error para que el cliente use Web Speech API
      return NextResponse.json(
        { error: 'Audio generation not configured' },
        { status: 503 }
      )
    }

    // Voice ID de Rachel (voz femenina americana clara y natural)
    const VOICE_ID = '21m00Tcm4TlvDq8ikWAM'
    
    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
      {
        method: 'POST',
        headers: {
          'Accept': 'audio/mpeg',
          'Content-Type': 'application/json',
          'xi-api-key': ELEVENLABS_API_KEY
        },
        body: JSON.stringify({
          text: text,
          model_id: 'eleven_monolingual_v1',
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75,
            style: 0.0,
            use_speaker_boost: true
          }
        })
      }
    )

    if (!response.ok) {
      throw new Error(`ElevenLabs API error: ${response.status}`)
    }

    const audioBuffer = await response.arrayBuffer()
    
    return new NextResponse(audioBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'audio/mpeg',
        'Cache-Control': 'public, max-age=31536000, immutable' // Cache por 1 año
      }
    })

  } catch (error) {
    console.error('Error generating audio:', error)
    return NextResponse.json(
      { error: 'Failed to generate audio' },
      { status: 500 }
    )
  }
}
