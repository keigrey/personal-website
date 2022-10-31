interface Button {
  text: string;
}

export default function Button({ text }: Button) {
  return (
    <button type="button" className="button-dark-mode">
      {text}
    </button>
  );
}
