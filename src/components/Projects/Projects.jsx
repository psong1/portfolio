import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Project({ projects }) {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      loop
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index}>
          <div className="inline-block p-8 rounded-md ">
            <h1>{project.name}</h1>
            <p className="p-4">{project.description}</p>
            <p className="py-2 text-2xl">Tech Stack</p>
            <ul className="list-disc list-inside">
              {project.tech.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
