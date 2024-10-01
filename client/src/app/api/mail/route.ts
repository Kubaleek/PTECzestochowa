import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import formidable from "formidable";

// Handle file upload in the POST method
export async function POST(request: NextRequest) {
  try {
    // Parse the incoming form data
    const form = formidable({ multiples: true }); // This allows multiple file uploads
    const data = await new Promise((resolve, reject) => {
      form.parse(request.body, (err, fields, files) => {
        if (err) {
          reject(err);
        } else {
          resolve({ fields, files });
        }
      });
    });

    const email = data.fields.email as string; // Unique user email
    const files = data.files;

    const savedFiles: string[] = [];

    // Iterate through uploaded files
    for (const fileKey in files) {
      const file = files[fileKey];

      if (Array.isArray(file)) {
        for (const f of file) {
          await saveFile(f, email, savedFiles);
        }
      } else {
        await saveFile(file, email, savedFiles);
      }
    }

    // Generate URLs for email attachments
    const publicURLs = savedFiles.map((filePath) => {
      const fileName = path.basename(filePath);
      return `${process.env.BASE_URL}/public/uploads/${email}/${fileName}`;
    });

    return NextResponse.json({
      success: true,
      message: "Files uploaded successfully.",
      savedFiles: publicURLs,
    });
  } catch (error) {
    console.error("Error uploading files:", error);
    return NextResponse.json({ success: false, message: "Error uploading files." });
  }
}

// Helper function to save files
async function saveFile(file: formidable.File, email: string, savedFiles: string[]) {
  const bytes = await file.a();
  const buffer = Buffer.from(bytes);

  // File path with user's unique email
  const filePath = path.join(
    process.cwd(),
    "public",
    "uploads",
    email,
    file.name
  );

  // Ensure the folder exists
  await createFolderIfNotExists(path.dirname(filePath));

  await writeFile(filePath, buffer);
  savedFiles.push(filePath); // Save the local file path
}

// Function to create the folder if it does not exist
async function createFolderIfNotExists(dir: string) {
  const fs = require("fs");
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}
