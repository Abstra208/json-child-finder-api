export async function GET() {
    return new Response("Hello, World!");
}

export async function POST() {
    try {
        const response = await fetch("https://json-finder.vercel.app/json-finder", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ key: "value" })
        });

        if (!response.ok) {
            throw new Error("Request failed");
        }

        const data = await response.json();
        return new Response(JSON.stringify(data));
    } catch (error) {
        return new Response("An error occurred: " + error.message, { status: 500 });
    }
}