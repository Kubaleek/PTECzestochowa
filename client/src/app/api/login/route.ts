import axios from "axios";
import { NextResponse } from "next/server";

interface RequestBody {
  email: string;
  password: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  try {
    const response = await axios.post("http://localhost:5000/login", body);

    const user = response.data.user;
    const token = response.data.token;

    if (response.status === 200 && user && token) {
      return new NextResponse(JSON.stringify({ user, token }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      return new NextResponse(JSON.stringify({ error: "Invalid credentials" }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  } catch (error) {
    console.error("Login API error:", error);
    return new NextResponse(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
