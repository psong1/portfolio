import headshotImg from "../../assets/images/headshot.png";

export default function Home() {
  return (
    <div className="inline-flex block">
      <img
        className="h-100 w-75 rounded-full"
        src={headshotImg}
        alt="My professional headshot"
      />
      <h1 className="text-center px-10 py-40">
        Hi, I'm <strong>Paul Song</strong>
      </h1>
    </div>
  );
}
