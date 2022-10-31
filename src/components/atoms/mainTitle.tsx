interface MainTitle {
  text: string;
}

export default function MainTitle({ text }: MainTitle) {
  return <h2 className="main-title">{text}</h2>;
}
