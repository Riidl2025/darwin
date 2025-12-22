import React from "react";

import P1 from "../../assets/2/Publication/P1.png";
import P2 from "../../assets/2/Publication/P2.png";
import P3 from "../../assets/2/Publication/P3.png";
import P4 from "../../assets/2/Publication/P4.png";
import P5 from "../../assets/2/Publication/P5.png";
import P6 from "../../assets/2/Publication/P6.png";
import P7 from "../../assets/2/Publication/P7.png";
import Loksatha from "../../assets/2/Publication/Loksatha.jpeg";
import Gujarati from "../../assets/2/Publication/Gujarati.jpeg";

const publications = [
  {
    id: 1,
    image: P1,
    link: "https://www.mid-day.com/mumbai-guide/things-to-do/article/evolving-into-a-better-tomorrow-22178187",
  },
  {
    id: 2,
    image: P2,
    link: "https://www.biospectrumindia.com/news/20/15286/bio-riidl-hosts-biohackathon-as-innovation-competition.html",
  },
  {
    id: 3,
    image: P3,
    link: "https://www.highereducationdigest.com/somaiya-vidyavihars-bioriidl-launches-darwin-a-3-day-event-for-biohackers-and-bioenthusiasts/",
  },
  {
    id: 4,
    image: P4,
    link: "https://indiaeducationdiary.in/somaiya-vidyavihars-bioriidl-launches-darwin-a-3-day-event-for-biohackers-and-bioenthusiasts/#google_vignette",
  },
  {
    id: 5,
    image: P5,
    link: Loksatha,
  },
  {
    id: 6,
    image: P6,
    link: Gujarati,
  },
  {
    id: 7,
    image: P7,
    link: "https://news1marathi.com/?p=1223",
  },
];

const Publications = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h3 className="text-2xl md:text-3xl font-bold text-center text-pink-300 mb-12">
        Publications
      </h3>

      <div className="flex flex-wrap justify-center items-center gap-6">
        {publications.map((pub) => (
          <a
            key={pub.id}
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <img
              src={pub.image}
              alt={`Publication ${pub.id}`}
              className="h-16 md:h-20 object-contain"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Publications;
