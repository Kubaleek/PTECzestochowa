import { render } from "@react-email/render";
import { Resend } from "resend";
import CoursesEmail from "../../../../emails/emodules";
import GeneralEmail from "../../../../emails/index";
import { KoalaWelcomeEmail } from "../../../../emails/econgres";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const {
      type,
      email,
      firstname,
      message,
      phone,
      title,
      academicDegree,
      affiliation,
      courtesy,
      middleName,
      presentationTopic,
      publicationSummary,
      institutionName,
      streetName,
      propertyName,
      regionName,
      postalCode,
      city,
      taxId,
      savedFiles // Ścieżki zapisanych plików
    } = await request.json();

    let emailContent;

    // Type the savedFiles as an array of strings
    const fileLinks = (savedFiles as string[]).map((file: string) => 
      `<a href="${process.env.BASE_URL}/public/uploads/${email}/${file.split('/').pop()}">${file.split('/').pop()}</a>`
    ).join('<br/>');

    // Wybór odpowiedniej wiadomości w zależności od typu
    switch (type) {
      case "congress":
        emailContent = KoalaWelcomeEmail({
          email,
          firstname,
          message,
          phone,
          title,
          academicDegree,
          affiliation,
          courtesy,
          middleName,
          presentationTopic,
          publicationSummary,
          institutionName,
          streetName,
          propertyName,
          regionName,
          postalCode,
          city,
          taxId,
          fileLinks, // Dodanie linków do wiadomości
        });
        break;

      case "courses":
        emailContent = CoursesEmail({
          email,
          firstname,
          message,
          phone,
          fileLinks // Dodanie linków do wiadomości
        });
        break;

      default:
        emailContent = GeneralEmail({
          email,
          firstname,
          message,
          phone,
          fileLinks // Dodanie linków do wiadomości
        });
        break;
    }

    // Przygotowanie ścieżek do załączników
    const attachmentPaths = (savedFiles as string[]).map((file: string) => {
      const fileName = file.split('/').pop();
      const filePath = `${process.env.BASE_URL}/uploads/${email}/${fileName}`;
      return {
        filename: fileName,
        path: filePath
      };
    });
    
    // Logowanie ścieżek załączników do debugowania
    console.log("Attachment paths:", attachmentPaths);
    
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [email],
      subject: `Thank you for your ${type} submission`,
      html: render(emailContent),
      attachments: attachmentPaths,
    });
    
    // Obsługa błędów
    if (error) {
      throw new Error(`Error sending email: ${error.message || "Unknown error"}`);
    }

    // Sukces
    return new Response(JSON.stringify({ message: "Email sent successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error:", error);
    // Cast the error to a known type to access the message
    const errorMessage = (error as Error).message || "Unknown error";
    return new Response(JSON.stringify({ error: "Failed to send email", err: errorMessage }), {
      status: 500,
    });
  }
}
