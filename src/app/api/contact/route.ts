import { NextResponse } from 'next/server';
// import { Resend } from 'resend';

// Temporairement désactivé - Configurez RESEND_API_KEY dans Vercel pour activer
// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // Validation email basique
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      );
    }

    // TODO: Activer Resend en configurant RESEND_API_KEY dans Vercel
    // Pour l'instant, on simule le succès et on log les données
    console.log('Message reçu (Resend désactivé):', { name, email, message });

    return NextResponse.json(
      {
        success: true,
        message: 'Message reçu ! La fonctionnalité d\'envoi d\'email sera bientôt activée.'
      },
      { status: 200 }
    );

    /* Code à réactiver une fois RESEND_API_KEY configuré:
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['kouakamsteve782@gmail.com'],
      replyTo: email,
      subject: `Nouveau message de ${name} via Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed;">Nouveau message depuis votre portfolio</h2>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nom:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          <div style="background: white; padding: 20px; border-left: 4px solid #7c3aed;">
            <h3>Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">
            Ce message a été envoyé depuis votre portfolio
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    );
    */
  } catch (error) {
    console.error('Erreur envoi email:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    );
  }
}
