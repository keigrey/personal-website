import Name from "../atoms/name";
import MainTitle from "../atoms/mainTitle";
import Button from "../atoms/button";
import Menu from "../organisms/menu";

export default function LeftContainer() {
  return (
    <div id="left-container">
      <div id="left-sub-container">
        <Name text="SERGEI KOSHELEV" />
        <MainTitle text="FULLSTACK SOFTWARE ENGINEER" />
        <Button text="NIGHT" />
        <Menu />
      </div>
    </div>
  );
}
