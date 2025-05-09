import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const nome = formData.get('nome') as string;
    const email = formData.get('email') as string;
    // Il campo telefono potrebbe non essere sempre presente, quindi gestiamo il caso in cui sia null o undefined
    const telefonoValue = formData.get('telefono');
    const telefono = telefonoValue ? String(telefonoValue) : undefined;
    const oggetto = formData.get('oggetto') as string;
    const messaggio = formData.get('messaggio') as string;

    // Input validation (basic)
    if (!nome || !email || !oggetto || !messaggio) {
      return NextResponse.json({ error: 'Tutti i campi obbligatori devono essere compilati.' }, { status: 400 });
    }

    // Configura il transporter di Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Modulo Contatti Sito" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // Invia all'indirizzo email specificato nelle variabili d'ambiente
      replyTo: email, // Email del mittente per la risposta
      subject: `Nuovo Messaggio dal Sito: ${oggetto}`,
      html: `
        <h1>Nuovo Messaggio dal Modulo Contatti</h1>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefono:</strong> ${telefono || 'Non fornito'}</p>
        <p><strong>Oggetto:</strong> ${oggetto}</p>
        <p><strong>Messaggio:</strong></p>
        <p>${messaggio.replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Messaggio inviato con successo!' }, { status: 200 });

  } catch (error) {
    console.error('Errore API /api/submit-form:', error); // Log dell'errore più specifico
    let errorMessage = 'Si è verificato un errore durante l\'invio del messaggio.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
