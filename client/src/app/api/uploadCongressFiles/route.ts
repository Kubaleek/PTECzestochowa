import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const email = data.get("email"); // Unique user email
    const files = ["file1", "file2", "file3", "file4"].map((field) =>
      data.get(field)
    );

    const savedFiles = [];

    for (const file of files) {
      if (file instanceof File) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // File path with user's unique email
        const filePath = path.join(
          process.cwd(),
          "public",
          "uploads",
          email as string, // Unique folder named after email
          file.name
        );

        // Ensure the folder exists
        await createFolderIfNotExists(path.dirname(filePath));

        await writeFile(filePath, buffer);
        savedFiles.push(filePath); // Save the local file path
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
      savedFiles: publicURLs, // Return public URLs instead of local paths
    });
  } catch (error) {
    console.error("Error uploading files:", error);
    return NextResponse.json({ success: false, message: "Error uploading files." });
  }
}

// Function to create the folder if it does not exist
async function createFolderIfNotExists(dir: string) {
  const fs = require("fs");
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}
