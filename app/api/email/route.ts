import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
    try {
        // Parse the request body
        const { name, subject, message } = await req.json();

        // Validate input
        if (!name || !subject || !message) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Elastic Email API request
        const response = await fetch("https://api.elasticemail.com/v4/emails", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.NEXT_PUBLIC_EMAIL_API_KEY}`, // Store in .env
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                Recipients: [{ Email: "rjnewswebsite@gmail.com" }],
                Content: {
                    Subject: subject,
                    Body: [
                        {
                            ContentType: "PlainText",
                            Content: message,
                        },
                    ],
                    From: "kasotiyavishal221@gmail.com", // Replace with your verified sender email
                },
            }),
        });

        // Check if response is JSON before parsing
        const contentType = response.headers.get("content-type");
        let data;

        if (contentType && contentType.includes("application/json")) {
            data = await response.json();
        } else {
            const text = await response.text();
            console.error("Non-JSON response from Elastic Email:", text);
            return NextResponse.json({ error: "Invalid response from email provider", details: text }, { status: response.status });
        }

        if (!response.ok) {
            return NextResponse.json({ error: "Failed to send email", details: data }, { status: response.status });
        }

        return NextResponse.json({ success: true, data }, { status: 200 });


    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
};

// Handle CORS Preflight (OPTIONS request)
export const OPTIONS = async () => {
    return new NextResponse(null, {
        status: 204,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
    });
};
