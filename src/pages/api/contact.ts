import { Resend } from 'resend'
import type { APIRoute } from 'astro'
import { contactFormSchema } from '@/schemas/contact'

export const prerender = false

const resend = new Resend(import.meta.env.RESEND_API_KEY)
const fromEmail = import.meta.env.RESEND_FROM_EMAIL
const toEmail = import.meta.env.RESEND_TO_EMAIL

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json()
  const parse = contactFormSchema('es').safeParse(body)

  if (!parse.success) {
    return new Response(JSON.stringify({ error: 'Invalid input', details: parse.error.format() }), {
      status: 400,
    })
  }

  const { name, email, serviceType, description } = parse.data

  try {
    const data = await resend.emails.send({
      from: `Samir Yangua <${fromEmail}>`,
      to: toEmail,
      subject: `📩 ¡Nuevo mensaje desde tu portafolio! 💼 De parte de ${name}`,
      replyTo: email,
      text: `Nombre: ${name}\nEmail: ${email}\nServicio: ${serviceType}\nDescripción: ${description}`,
      html: `
        <div style="font-family: sans-serif; color: #111; line-height: 1.5;">
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Tipo de servicio:</strong> ${serviceType}</p>
          <p><strong>Descripción:</strong><br />${description.replace(/\n/g, '<br />')}</p>
        </div>
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
