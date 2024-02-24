export function Card({
  title,
  children,
  href,
}: {
  title: string;
  children: React.ReactNode;
  href: string;
}): JSX.Element {
  return (
    <div className="bg-yellow-500 border border-gray-500 rounded">
      <a href={href} rel="noopener noreferrer" target="_blank">
        <h2>
          {title} <span>-&gt;</span>
        </h2>
        <p className="bg-blue-500">{children}</p>
      </a>
    </div>
  );
}
