import Moon from "../atoms/moon";
import CloudWave from "../molecules/cloudWave";

export default function RightContainer() {
  return (
    <div className="right-container">
      <CloudWave />
      <Moon />
    </div>
  );
}
