import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Interfaccia per i dati del preventivo attesi
interface PreventivoRequestBody {
  nome: string;
  email: string;
  telefono?: string;
  messaggio: string;
  regione: string; // Campo aggiuntivo per la regione
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const nome = formData.get('name') as string; // Dal form usiamo 'name'
    const email = formData.get('email') as string;
    const telefonoValue = formData.get('phone'); // Dal form usiamo 'phone'
    const telefono = telefonoValue ? String(telefonoValue) : undefined;
    const messaggio = formData.get('message') as string; // Dal form usiamo 'message'
    const regione = formData.get('regione') as string; // Assumiamo che invieremo anche la regione

    // Validazione dell'input
    if (!nome || !email || !messaggio || !regione) {
      return NextResponse.json({ error: 'Nome, email, messaggio e regione sono campi obbligatori.' }, { status: 400 });
    }

    // Configura il transporter di Nodemailer (usa le stesse variabili d'ambiente)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Richiesta Preventivo Sito" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `Nuova Richiesta Preventivo da Mappa - Regione: ${regione}`,
      html: `
        <h1>Nuova Richiesta di Preventivo dalla Mappa</h1>
        <p><strong>Regione Selezionata:</strong> ${regione}</p>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefono:</strong> ${telefono || 'Non fornito'}</p>
        <p><strong>Dettagli Richiesta:</strong></p>
        <p>${messaggio.replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Richiesta di preventivo inviata con successo!' }, { status: 200 });

  } catch (error) {
    console.error('Errore API /api/submit-preventivo:', error);
    let errorMessage = 'Si è verificato un errore durante l\'invio della richiesta di preventivo.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
