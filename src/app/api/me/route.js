import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Pantawat Boonchaloey",
    studentId: "650612093",
  });
};
