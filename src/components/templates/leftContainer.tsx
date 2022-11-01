import Name from "../atoms/name";
import MainTitle from "../atoms/mainTitle";
import ButtonDark from "../atoms/buttonDark";
import ButtonLight from "../atoms/buttonLight";
import Menu from "../organisms/menu";
import LanguageSwitch from "../atoms/languageSwitch";

export default function LeftContainer() {
  return (
    <div id="left-container">
      <div id="left-sub-container">
        <LanguageSwitch />
        <Name text="SERGEI KOSHELEV" />
        <MainTitle text="FULLSTACK SOFTWARE ENGINEER" />
        <ButtonDark text="NIGHT" />
        <ButtonLight text="DAY" />
        <Menu />
      </div>
    </div>
  );
}
