export async function GET() {
    return Response.json({ message: 'Hello, World!'})
}

export async function POST(request: Request) {
    const comment = await request.json();
    const newcomment = {
        id: comment.lenght + 1,
        text: comment.text,
    };
    return new Response(JSON.stringify(newcomment), {
        headers: {
            'Content-Type': 'application/json'
        },
        status: 201,
    });
}