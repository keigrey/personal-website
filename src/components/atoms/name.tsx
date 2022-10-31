interface Name {
  text: string;
}

export default function Name({ text }: Name) {
  return <h1 className="name">{text}</h1>;
}
