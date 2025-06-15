import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  return new Response(null, {
    status: 302,
    headers: {
      Location: 'https://wa.me/936489602?text=Hola%20Samir%2C%20vi%20tu%20web%20y%20me%20gustaria%20hablar%20contigo',
    },
  });
};
