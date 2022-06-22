interface ResultComponentProps {
  titulo: string;
}

export function ResultComponent({
  titulo = "escreva seu titulo",
}: ResultComponentProps) {
  return (
    <>
      <h2>{titulo}</h2>
      <input type="text" />
    </>
  );
}
