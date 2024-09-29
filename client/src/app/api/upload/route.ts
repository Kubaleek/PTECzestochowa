import { writeFile } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();

    const fileEntry = data.get('file');
    const fileType = data.get('fileType'); // Typ pliku, np. 'course' lub 'certificate'

    const file = fileEntry instanceof File ? fileEntry : null;

    // Sprawdzenie, czy plik został przesłany
    if (!file || !fileType) {
      return NextResponse.json({ success: false, message: "File or file type not provided." });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Określenie ścieżki do zapisu pliku w zależności od typu pliku
    let filePath;
    if (fileType === 'course') {
      filePath = path.join(process.cwd(), 'public', 'assets', 'Courses', file.name);
    } else if (fileType === 'certificate') {
      filePath = path.join(process.cwd(), 'public', 'assets', 'Courses', 'Certificates', file.name);
    } else {
      return NextResponse.json({ success: false, message: "Invalid file type." });
    }

    // Zapis pliku na dysku
    await writeFile(filePath, buffer);
    console.log(`File saved at: ${filePath}`);

    // Ustawienie poprawnej ścieżki URL do pliku
    const courseLink = fileType === 'course' 
      ? `/assets/Courses/${file.name}`
      : `/assets/Courses/Certificates/${file.name}`;

    return NextResponse.json({
      success: true,
      filePath: courseLink, // Zwrócenie linku do zapisanego pliku
    });

  } catch (error) {
    console.error("Error saving file:", error);
    return NextResponse.json({ success: false, message: "Error saving file." });
  }
}
