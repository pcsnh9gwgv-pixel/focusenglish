# Cloudflare Pages Deployment Guide

## Status: ✅ Ready for Deployment

**Last Updated:** 2026-01-19

## Edge Runtime Configuration

All dynamic routes have been configured with Edge Runtime:

### API Routes
- ✅ `/app/api/generate-audio/route.ts` - Audio generation API
- ✅ `/app/api/subscribe/route.ts` - Newsletter subscription
- ✅ `/app/api/test-supabase/route.ts` - Database testing

### Dynamic Pages
- ✅ `/app/certificaciones/[level]/leccion/[lessonId]/page.tsx` - Lesson pages
- ✅ `/app/cursos/[goal]/[level]/page.tsx` - Course landing pages

## Build Settings for Cloudflare Pages

```bash
Build command: npx @cloudflare/next-on-pages@1
Build output directory: .vercel/output/static
Root directory: (leave blank or /)
```

## Environment Variables Required

Set these in Cloudflare Pages dashboard:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
RESEND_API_KEY=your_resend_api_key
NOTIFICATION_EMAIL=your_notification_email
ELEVENLABS_API_KEY=your_elevenlabs_api_key (optional)
```

## Deployment Process

1. **Automatic Deployment**: Push to `main` branch triggers automatic deployment
2. **Manual Deployment**: Use Cloudflare Pages dashboard to trigger rebuild
3. **Build Duration**: Typically 2-5 minutes

## Troubleshooting

### If deployment fails:
1. Check build logs in Cloudflare dashboard
2. Verify all environment variables are set
3. Ensure Edge Runtime is configured on all dynamic routes
4. Check that `@cloudflare/next-on-pages` is compatible with Next.js version

## Project Information

- **Framework**: Next.js 16.1.1 with Turbopack
- **Runtime**: Edge Runtime for Cloudflare Workers
- **Deployment Platform**: Cloudflare Pages
- **Repository**: https://github.com/pcsnh9gwgv-pixel/focusenglish

## Recent Changes (2026-01-19)

- ✅ Added Edge Runtime config to all dynamic routes
- ✅ Fixed Cloudflare Pages compatibility issues
- ✅ Disabled Digital Ocean deployments
- ✅ Updated build configuration
- ✅ Version bumped to 0.1.2

## Support

For deployment issues, contact Cloudflare Pages support or check:
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Next.js on Cloudflare](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
