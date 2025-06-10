import { useState, useEffect, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const options = {
  fullScreen: { enable: true, zIndex: -1 },
  background: { color: { value: "#00000" } },
  particles: {
    number: { value: 100, density: { enable: true, area: 800 } },
    color: { value: "#CD1C18" },
    shape: { type: "circle" },
    opacity: { value: 0.8 },
    size: { value: 5 },
    move: { enable: true, speed: 2 },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      onClick: { enable: true, mode: "push" },
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { quantity: 4 },
    },
  },
};

export default function ParticlesBackground() {
  const [initDone, setInitDone] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      console.log("[tsparticles] engine init: ", engine);
      await loadFull(engine);
    }).then(() => {
      console.log("[tsparticles] engine plugins loaded");
      setInitDone(true);
    });
  });

  const particlesLoaded = useCallback((container) => {
    console.log("[tsparticles] loaded:", container?.particles?.count);
  }, []);

  if (!initDone) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
    />
  );
}
