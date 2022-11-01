interface Button {
  text: string;
}

export default function ButtonLight({ text }: Button) {
  return (
    <button type="button" className="button-dark-mode light">
      {text}
    </button>
  );
}
