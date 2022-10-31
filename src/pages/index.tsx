import styles from "./styles/Home.module.css";
import Name from "../components/atoms/name";
import MainTitle from "../components/atoms/mainTitle";
import Button from "../components/atoms/button";
import Menu from "../components/organisms/menu";
import Moon from "../components/atoms/moon";
import CloudWave from "../components/molecules/cloudWave";

export default function Home() {
  return (
    <div className={styles.container}>
      <Name text="SERGEI KOSHELEV" />
      <MainTitle text="FULLSTACK SOFTWARE ENGINEER" />
      <Button text="NIGHT" />
      <Menu />
      <Moon />
      <CloudWave />
    </div>
  );
}
