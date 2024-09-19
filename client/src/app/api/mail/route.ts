import { render } from "@react-email/render";
import { Resend } from "resend";
import KoalaWelcomeEmail from "../../../../emails";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request, res: Response) {
	// rate limit
	// authorization

	const { email, userFirstname } = await request.json();

	const { data, error } = await resend.emails.send({
        from: "Acme <no-reply@kuba.test.com>", // Update to a valid email address
        to: [email],
        subject: "Thank you",
        html: render(KoalaWelcomeEmail({ userFirstname })),
      });
	if (error) {
		return Response.json(error);
	}

	return Response.json({ message: "Email sent successfully" });
}