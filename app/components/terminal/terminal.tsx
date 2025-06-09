"use client";
import { useState, useRef, useEffect, type FormEvent } from "react";
import { cn } from "~/lib/utils";
import { Maximize, Minus, Code } from "lucide-react";

type Message = {
  text: string;
  sender: "user" | "assistant";
};

const welcomeMessage: Message = {
  text: `AI Assistant Initialized.
Connected to portfolio context of Iheb Belhadj.

----------------------------------------------------
Welcome! I'm ready to answer your questions. 👋
Type 'help' for some suggestions.`,
  sender: "assistant",
};

type TerminalProps = {
  isMinimized: boolean;
  onToggleMinimize: () => void;
};

export function Terminal({ isMinimized, onToggleMinimize }: TerminalProps) {
  const [messages, setMessages] = useState<Message[]>([welcomeMessage]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);
  useEffect(() => {
    if (!isMinimized) {
      inputRef.current?.focus();
    }
  }, [isMinimized]);

  const handleHelpCommand = () => {
    const helpMessage: Message = {
      text: `This is an interactive AI assistant for Iheb Belhadj's portfolio. 
You can ask me questions in natural language.

SUGGESTED QUERIES:
  'What are Iheb's strongest technical skills?'
  'Tell me about his experience at Talan Consulting.'
  'What kind of projects has he built?'
  'How can I contact him?'

UTILITY COMMANDS:
  'help'    - Shows this help message.
  'clear'   - Clears the terminal screen.`,
      sender: "assistant",
    };
    setMessages((prev) => [...prev, helpMessage]);
  };

  const handleClearCommand = () => {
    setMessages([{ text: "Terminal cleared.", sender: "assistant" }]);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    // --- Command Handling ---
    if (input.trim().toLowerCase() === "help") {
      handleHelpCommand();
      setInput("");
      return;
    }
    if (input.trim().toLowerCase() === "clear") {
      handleClearCommand();
      setInput("");
      return;
    }

    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      if (!response.ok) throw new Error("API request failed");
      const data = await response.json();
      const assistantMessage: Message = {
        text: data.reply,
        sender: "assistant",
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { text: "Error: Could not get a response.", sender: "assistant" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  if (isMinimized) {
    return (
      <button
        onClick={onToggleMinimize}
        className="border-border bg-card font-nerd text-muted-foreground hover:bg-border flex h-full w-full items-center gap-2 border-t px-4 py-2 text-sm"
      >
        <Code className="h-4 w-4" /> <span>[iheb@portfolio] — zsh</span>
        <Maximize className="ml-auto h-4 w-4" />
      </button>
    );
  }

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className="bg-card flex h-full flex-col font-mono text-sm"
    >
      <div className="border-border bg-background/50 flex items-center justify-between border-b px-4 py-1.5">
        <div className="flex items-center gap-2 font-semibold">
          <span className="text-syntax-keyword">iheb@portfolio</span>
          <span className="text-muted-foreground">:</span>
          <span className="text-accent">~/</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleMinimize}
            className="text-muted-foreground hover:text-foreground"
          >
            <Minus className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-grow overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2 last:mb-0">
            {msg.sender === "user" ? (
              <div className="flex items-start gap-2">
                <span className="text-accent">❯</span>
                <span className="text-foreground">{msg.text}</span>
              </div>
            ) : (
              <pre className="text-muted-foreground font-mono whitespace-pre-wrap">
                {msg.text}
              </pre>
            )}
          </div>
        ))}
        {isLoading && (
          <p className="text-muted-foreground animate-pulse">
            Assistant is typing...
          </p>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <form
        onSubmit={handleSubmit}
        className="border-border flex items-center gap-2 border-t p-4"
      >
        <span className="text-accent">❯</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="text-foreground placeholder:text-muted-foreground/50 w-full flex-grow bg-transparent outline-none"
          placeholder="
            Enter your message here or type 'help' to see commands...
          "
          disabled={isLoading}
          autoFocus
        />
      </form>
    </div>
  );
}
