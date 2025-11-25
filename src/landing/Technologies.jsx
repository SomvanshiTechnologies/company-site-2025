import React from 'react';
import {
  SiPython,
  SiNodedotjs,
  SiReact,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiTensorflow,
  SiPytorch,
  SiTypescript,
  SiJavascript,
  SiAngular,
  SiVuedotjs,
  SiMysql,
  SiRedis,
  SiGooglecloud,
  SiGit,
  SiJenkins,
  SiGraphql,
  SiFirebase,
  SiFlutter,
  SiSwift
} from 'react-icons/si';
import { VscAzure } from "react-icons/vsc";
import { FaAws } from "react-icons/fa";


const Technologies = () => {
  const technologies = [
    { name: 'Python', Icon: SiPython, color: '#3776AB' },
    { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
    { name: 'React', Icon: SiReact, color: '#61DAFB' },
    { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
    { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Angular', Icon: SiAngular, color: '#DD0031' },
    { name: 'Vue.js', Icon: SiVuedotjs, color: '#4FC08D' },
    { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
    { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
    { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
    { name: 'Redis', Icon: SiRedis, color: '#DC382D' },
    { name: 'Google Cloud', Icon: SiGooglecloud, color: '#4285F4' },
    { name: 'Azure', Icon: VscAzure, color: '#0078D4' },
    { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
    { name: 'Kubernetes', Icon: SiKubernetes, color: '#326CE5' },
    { name: 'TensorFlow', Icon: SiTensorflow, color: '#FF6F00' },
    { name: 'PyTorch', Icon: SiPytorch, color: '#EE4C2C' },
    { name: 'GraphQL', Icon: SiGraphql, color: '#E10098' },
    { name: 'Firebase', Icon: SiFirebase, color: '#FFCA28' },
    { name: 'Flutter', Icon: SiFlutter, color: '#02569B' },
    { name: 'Swift', Icon: SiSwift, color: '#FA7343' },
    { name: 'Git', Icon: SiGit, color: '#F05032' },
    { name: 'Jenkins', Icon: SiJenkins, color: '#D24939' },
    { name: 'AWS', Icon: FaAws, color: '#FF9900' },
  ];

  // Duplicate technologies array for seamless infinite scroll
  const duplicatedTechnologies = [...technologies, ...technologies, ...technologies];

  return (
    <section className="py-16 sm:py-24 px-4 bg-gradient-light overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl md:text-5xl text-center mb-4 text-text"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: '600' }}
        >
          Technologies We Use
        </h2>
        <p
          className="text-center text-text opacity-70 mb-16 max-w-3xl mx-auto"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Leveraging cutting-edge tools and frameworks to build robust, scalable, and innovative solutions
        </p>

        {/* Infinite Scrolling Carousel */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-[#FFFEED] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-[#FFFEED] to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-scroll">
            {duplicatedTechnologies.map((tech, index) => (
              <div
                key={index}
                className="shrink-0 mx-8 transition-transform duration-300 hover:scale-110"
                title={tech.name}
              >
                <tech.Icon
                  className="transition-all duration-300"
                  size={56}
                  style={{ color: tech.color }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          display: flex;
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Technologies;
