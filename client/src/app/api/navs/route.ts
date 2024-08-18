import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  try {
    const { data } = await axios.get("http://localhost:5000/pte/posts/menu");
    return NextResponse.json(data);
  } catch (error) {
    console.error("Błąd podczas pobierania danych:", error);
    return NextResponse.json(
      { error: "Błąd podczas pobierania danych" },
      { status: 500 }
    );
  }
}
