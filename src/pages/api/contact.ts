import { Resend } from 'resend'
import type { APIRoute } from 'astro'
import { z } from 'zod'

export const prerender = false;


const resend = new Resend(import.meta.env.RESEND_API_KEY)
const ContactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  serviceType: z.string().min(2),
  description: z.string().min(10),
  phone: z.string().optional(),
})

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json()
  const parse = ContactFormSchema.safeParse(body)
  console.log(parse.error?.format())

  if (!parse.success) {
    return new Response(JSON.stringify({ error: 'Invalid input', details: parse.error.format() }), {
      status: 400,
    })
  }

  const { name, email, serviceType, description } = parse.data
  console.log(parse.data)

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'delivered@resend.dev',
      subject: `Nuevo mensaje de contacto de ${name}`,
      replyTo: email,
      text: `
Nombre: ${name}
Email: ${email}
Servicio: ${serviceType}
Descripción: ${description}
      `.trim(),
    })

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error sending email', details: error }), {
      status: 500,
    })
  }
}
