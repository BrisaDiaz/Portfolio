import { headers, cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const headersList = headers();
  const cookieStore = cookies();
  const lang = headersList.get("Accept-Language");
  const theme = cookieStore.get("theme");
  return NextResponse.json({ lang, theme: theme?.value || null });
}
