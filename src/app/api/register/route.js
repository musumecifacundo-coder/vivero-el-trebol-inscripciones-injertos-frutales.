import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Restauramos las CLAVES ORIGINALES que el script de Google necesita buscar. 
    // Si enviamos "Nombre" en lugar de "name", el script falla al no encontrar qué procesar.
    const payload = {
      name: body.name,
      phone: body.phone,
      instagram: body.instagram || "No proporcionado",
      curso: "Injertos frutales",
      source: body.source || "Direct"
    };

    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;
    console.log("Enviando datos a Google Script con claves originales...");
    
    if (GOOGLE_SCRIPT_URL) {
      try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
        const respText = await response.text();
        console.log("Respuesta de Google Script:", response.status, respText);
      } catch (e) {
        console.error("Google Sheets Error:", e);
      }
    }

    return NextResponse.json({ success: true, received: payload });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
