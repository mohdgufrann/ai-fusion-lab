import { aj } from "@/config/Arcjet";
import arcjet, { tokenBucket } from "@arcjet/next";
import { NextResponse } from "next/server";


export async function GET(req) {
  const userId = "user123"; // Replace with your authenticated user ID
  console.log("req hai",req)
  const decision = await aj.protect(req, { userId, requested: 5 }); // Deduct 5 tokens from the bucket
  console.log("Arcjet decision", decision);

  if (decision.isDenied()) {
    return NextResponse.json(
      { error: "Too Many Requests", reason: decision.reason },
      { status: 429 },
    );
  }

  return NextResponse.json({ name: "gufran",
    location:"india"
   });
}


