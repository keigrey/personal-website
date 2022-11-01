interface Button {
  text: string;
}

export default function ButtonDark({ text }: Button) {
  return (
    <button type="button" className="button-dark-mode dark">
      {text}
    </button>
  );
}
