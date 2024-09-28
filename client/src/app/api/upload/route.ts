import { writeFile } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

export async function POST(request: NextRequest) {
  const data = await request.formData();

  const fileEntry = data.get('file');

  const file = fileEntry instanceof File ? fileEntry : null;

  // Ensure all required fields are provided
  if (!file) {
    return NextResponse.json({ success: false, message: "File not provided." });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Ensure correct saving path
  const filePath = path.join(process.cwd(), 'public', 'assets', 'Courses', file.name);
  
  try {
    // Save the file
    await writeFile(filePath, buffer);
    console.log(`File saved at: ${filePath}`);

    // Set the correct course link format
    const courseLink = `/assets/Courses/${file.name}`; // This line formats the link correctly
    
    return NextResponse.json({ 
      success: true,
      filePath: courseLink,
    });
  } catch (error) {
    console.error("Error saving file:", error);
    return NextResponse.json({ success: false, message: "Error saving file." });
  }
}
