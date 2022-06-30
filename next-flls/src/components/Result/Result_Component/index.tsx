interface ResultComponentProps {
  titulo: string;
  valores: number | string;
}

export function ResultComponent({
  titulo = "escreva seu titulo",
  valores,
}: ResultComponentProps) {
  return (
    <>
      <h2>{titulo}</h2>
      <input type="text" defaultValue={valores} />
    </>
  );
}
