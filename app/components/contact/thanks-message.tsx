import { Button } from "~/components/ui/button";

export function ThankYouMessage({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center font-mono">
      <h2 className="text-foreground text-2xl font-bold">Thank you! 🤘</h2>
      <p className="text-muted-foreground mt-2">
        Your message has been accepted.
        <br />
        You will receive answer soon!
      </p>
      <Button
        onClick={onReset}
        className="bg-vim-yellow text-background hover:bg-vim-yellow/90 mt-6 font-bold"
      >
        send-new-message
      </Button>
    </div>
  );
}
