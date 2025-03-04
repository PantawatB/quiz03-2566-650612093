import { DB, readDB, writeDB } from "@/app/libs/DB";
import { checkToken } from "@/app/libs/checkToken";
import { nanoid } from "nanoid";
import { NextResponse } from "next/server";

export const GET = async () => {
  readDB();

  return NextResponse.json({
    ok: true,
    //rooms:
    //totalRooms:
  });
};

export const POST = async (request) => {
  const body = await request.json();
  const payload = checkToken();
  const findroom = DB.rooms.find((x) => x.roomName === roomName);
  if (findroom) {
    return NextResponse.json(
      {
        ok: false,
        message: `Room ${body.roomName} already exists`,
      },
      { status: 400 }
    );
    // return NextResponse.json(
    //   {
    //     ok: false,
    //     message: "Invalid token",
    //   },
    //   { status: 401 }
    // );
  }

  readDB();

  // return NextResponse.json(
  //   {
  //     ok: false,
  //     message: `Room ${"replace this with room name"} already exists`,
  //   },
  //   { status: 400 }
  // );

  const roomId = nanoid();

  //call writeDB after modifying Database
  writeDB();

  return NextResponse.json({
    ok: true,
    //roomId,
    message: `Room ${"replace this with room name"} has been created`,
  });
};
