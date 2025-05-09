import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Definiamo un'interfaccia per la struttura del corpo della richiesta
interface ContactFormRequestBody {
  nome: string;
  email: string;
  telefono?: string; // Il telefono è opzionale
  oggetto: string;
  messaggio: string;
}

export async function POST(request: Request) {
  try {
    // Ora diciamo a TypeScript che ci aspettiamo un corpo di tipo ContactFormRequestBody
    const body = await request.json() as ContactFormRequestBody;
    const { nome, email, telefono, oggetto, messaggio } = body;

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
      to: process.env.GMAIL_USER,
      replyTo: email,
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
    console.error('Errore API:', error);
    let errorMessage = 'Si è verificato un errore durante l\'invio del messaggio.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
