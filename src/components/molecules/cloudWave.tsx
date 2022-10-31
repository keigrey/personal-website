import Script from "next/script";

export default function CloudWave() {
  return (
    <div className="cloud-wave">
      <div className="background--custom">
        <canvas id="canvas" />
      </div>
      <Script
        src="https://cdn.jsdelivr.net/gh/greentfrapp/pocoloco@minigl/minigl.js"
        onLoad={() => {
          const gradient = new Gradient();
          gradient.initGradient("#canvas");
        }}
      ></Script>
    </div>
  );
}
