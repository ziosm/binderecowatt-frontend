import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    // Qui potresti voler fare qualcosa con i dati, ma per Netlify Forms,
    // il semplice fatto che Netlify veda una richiesta POST a un endpoint del tuo sito
    // con i campi del form (incluso "form-name") dovrebbe essere sufficiente
    // se il form è stato rilevato dal file statico.

    // Logghiamo i dati per debug (visibile nei log della funzione su Netlify)
    console.log("Dati del form ricevuti nell'API route:", Object.fromEntries(formData));

    // Reindirizziamo a una pagina di successo o restituiamo un JSON di successo.
    // Per Netlify Forms, spesso basta che l'endpoint esista e accetti il POST.
    // Netlify dovrebbe gestire la sottomissione del form in background.
    // Se hai una pagina di successo, puoi reindirizzare:
    // return NextResponse.redirect(new URL('/success', request.url));
    
    // Oppure, semplicemente restituisci una risposta JSON di successo:
    return NextResponse.json({ message: "Form inviato con successo all'API route" }, { status: 200 });

  } catch (error) {
    console.error("Errore nell'API route del form:", error);
    return NextResponse.json({ message: "Errore interno del server" }, { status: 500 });
  }
}

