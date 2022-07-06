interface ResultComponentProps {
  titulo: string;
  valores: number | string;
}

export function ResultComponent({
  titulo = "escreva seu titulo",
  valores = 0,
}: ResultComponentProps) {
  return (
    <>
      <h2>{titulo}</h2>
      <input type="text" defaultValue={valores} />
    </>
  );
}
