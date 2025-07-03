import headshotImg from "../assets/images/headshot.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-8">
      <div className="w-full h-full md:w-[400px] md:h-[500px] rounded-full overflow-hidden">
        <img
          className="w-full h-full object-cover object-center"
          src={headshotImg}
          alt="My professional headshot"
        />
      </div>
      <h1 className="text-center text-3xl md:text-4xl font-semibold mt-8 text-white">
        Hi, I'm <span className="font-bold">Paul Song</span>
      </h1>
    </div>
  );
}
