import { Button, Card } from "@repo/ui";

export default function Page(): JSX.Element {
  return (
    <main className="w-full h-screen bg-green-300 p-20 space-y-20">
      <h1>App Web</h1>
      <Button appName="web">Click me!</Button>
      <Card title="Titolo" href="https://example.com/">
        <span>card di prova</span>
      </Card>
    </main>
  );
}
