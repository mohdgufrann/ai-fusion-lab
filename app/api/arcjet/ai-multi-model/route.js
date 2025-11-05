import axios from "axios";
import { NextResponse } from "next/server";
export async function POST(req) {
  try {
    const { model, msg, parentModel } = await req.json();

    const payload = {
      message: [{ role: "user", content: "Hello AI!" }],
    aiModel: "gpt-4.1-mini",
    outputType: "text"
    };

    console.log("Payload:", payload);

    const response = await axios.post(
      "https://kravixstudio.com/api/v1/chat",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + process.env.KRAVIXSTUDIO_API_KEY
        }
      }
    );

    console.log("API response:", response.data);

    return NextResponse.json({
      ...response.data,
      model: parentModel
    });

  } catch (error) {
    console.error("API error:", error.response?.data || error.message);
    return NextResponse.json({
      success: false,
      error: error.response?.data || error.message
    }, { status: 500 });
  }
}
