import React from "react";

const Testimonial = () => {
  const testimonials = [
    {
      quote:
        "Darwin is one of the best science platforms for younger students to bring their ideas and innovation and present it to the world. For me it was the best experience and I'm looking forward to taking part in every session and workshop at Darwin. My experience there was amazing.",
      author: "Arshad Khan",
    },
    {
      quote:
        "It was an amazing experience as I organized my first virtual workshop at Darwin 2021. I am glad I got to connect with so many amazing people via Darwin 2021. Thank you Darwin India for organizing such an amazing conference!",
      author: "Mohini Yadav",
    },
    {
      quote:
        "Darwin 2021 was indeed amazing, informative, exciting, new, insightful, motivational and awesome. It gave me the vision of how research takes place at a global level and why collaboration is important. Thank you for giving me the opportunity to network.",
      author: "Harshada Satdive",
    },
    {
      quote:
        "The Darwin conference focused on exponential rather than incremental approach towards biology. Great to see and be a part of Darwin - the only  platform which gives us an opportunity to know what’s going on in world class research till now.",
      author: "Nashim Aktar",
    },
    {
      quote:
        "It was a lovely experience having attended this vast scale conference, that along with adding stars to my CV, also added a lot of info to my knowledge that was very new to me!",
      author: "Deepanshu Goyal",
    },
  ];

  return (
    <section className="py-20 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-center text-pink-300 mb-12">
            Testimonial
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl shadow-md flex flex-col bg-pink-100"
            >
              <p className="text-gray-800 mb-4 italic">"{t.quote}"</p>

              <div className="flex items-center mt-auto">
                {/* <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 font-bold mr-3"> */}
                  {/* {t.author.charAt(0)} */}
                {/* </div> */}
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{t.author}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
