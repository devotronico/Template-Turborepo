import { Button, Card } from "@repo/ui";

export default function Page(): JSX.Element {
  return (
    <main className="w-full h-screen bg-green-300">
      <Button appName="web">Click me!</Button>
      <br />
      <Card title="Titolo" href="https://example.com/">
        <span>card di prova</span>
      </Card>
      <br />
      <button className="bg-red-500 text-white p-2">CLICCAMI</button>
    </main>
  );
}
