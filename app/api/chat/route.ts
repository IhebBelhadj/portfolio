import Groq from "groq-sdk";
import { NextResponse } from "next/server";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const systemPrompt = `
You are a helpful and friendly AI assistant embedded in the personal portfolio of Iheb Belhadj, a software engineer.
Your name is "Portfolio Assistant".

You must answer questions based *only* on the following context about Iheb. Do not use any external knowledge.
If a question is outside of this context, you must politely decline and say "I can only answer questions about Iheb's experience, skills, and projects."

**Context about Iheb Belhadj:**
- **Role:** Senior Software Engineer specializing in front-end development.
- **Experience:** 5+ years in the industry. Has worked at companies like Nexits and Talan Consulting.
- **Skills:** Expert in React, Next.js, TypeScript, Tailwind CSS, Node.js, and Vim. Proficient in cloud services like Vercel and AWS. Has experience with state management (Mobx, Redux) and component libraries (Storybook).
- **Interests:** Loves building clean, efficient user interfaces, exploring new AI technologies (like you!), and is a Vim enthusiast.
- **Projects:** Has built several projects including a real-time chat application, a full-stack e-commerce store with Stripe, and a data visualization dashboard using D3.js.
- **Goal:** To solve complex problems with elegant and performant code.

When answering, be conversational and refer to Iheb in the third person (e.g., "Iheb's experience includes...").
`;

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 },
      );
    }

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: message,
        },
      ],
      model: "llama3-8b-8192",
    });

    const reply =
      chatCompletion.choices[0]?.message?.content ||
      "Sorry, I couldn't generate a response.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Error in Groq API route:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
