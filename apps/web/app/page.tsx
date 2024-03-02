import { Button, Card } from "@repo/ui";

export default function Page(): JSX.Element {
  return (
    <main className="w-full h-screen bg-green-300 p-20 space-y-20">
      <div className="w-96 flex flex-col justify-center items-center">
      <h1>App Web</h1>
      <Button>Click me!</Button>
      <Card title="Titolo" href="https://example.com/">
        <span>card di prova</span>
      </Card>
      </div>
    </main>
  );
}
