import { render } from "@react-email/render";
import { Resend } from "resend";
import KoalaWelcomeEmail from "../../../../emails";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request, res: Response) {
	// rate limit
	// authorization

	const { email, userFirstname,message,phone } = await request.json();

	const { data, error } = await resend.emails.send({
		from: 'Acme <onboarding@resend.dev>',
        to: [email],
        subject: "Thank you",
        html: render(KoalaWelcomeEmail({
			email:email,
			firstname:userFirstname,
			message:message,
			phone:phone
		})),
      });
	if (error) {
		return Response.json(error);
	}

	return Response.json({ message: "Email sent successfully" });
}