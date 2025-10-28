import type { APIRoute } from 'astro'

export const GET: APIRoute = async ({ redirect }) => {
  const whatsappUrl =
    'https://api.whatsapp.com/send?phone=51936489602&text=He%20visto%20tu%20portafolio%20y%20me%20interesa%20trabajar%20contigo'
  return redirect(whatsappUrl, 302)
}
