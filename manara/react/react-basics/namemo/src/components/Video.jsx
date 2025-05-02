import "../styles/Video.css";

const Video = () => (
  <>
    <video
      data-testid="bg-video"
      src="/src/assets/itachi.mp4"
      autoPlay
      loop
      muted
    ></video>
  </>
);

export default Video;
