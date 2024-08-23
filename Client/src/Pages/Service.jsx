import React from "react";
import BannerSec from "../Components/BannerSec";
import bgImage from "../assets/images/ServiceImage.jpg";
import ServiceImg1 from "../assets/images/serviceImg.png";
import ServiceImg2 from "../assets/images/serviceImg1.png";
import ServiceImg3 from "../assets/images/serviceImg2.jpg";
import OfferedServices from "../Components/OfferedServices";

function Service() {
  return (
    <section>
      <BannerSec
        bgImage={bgImage}
        align="items-center"
        size="text-4xl md:text-[96px]"
        text="text-[rgba(255,255,255,1)]"
        title="Services"
        overlayOpacity={0.4}
      />
      <div className="container mx-auto  mb-10">
        {arr.map((data) => (
          <OfferedServices
            key={data.id}
            title={data.title}
            desc1={data.desc1}
            desc2={data.desc2}
            desc3={data.desc3}
            desc4={data.desc4}
            image={data.img}
          />
        ))}
      </div>
    </section>
  );
}

export default Service;
const arr = [
  {
    id: 1,
    title: "Open Seat",
    desc1:
      "Enjoy the freedom and flexibility of Workhive's Open Seats. Perfect for freelancers, remote workers, or anyone seeking a productive workspace. Plug in, power up, and focus amidst a vibrant community.",
    desc2:
      "Whether you need a desk for a few hours or a full day, Workhive's Open Seats adapt to your schedule. Connect with like-minded individuals, exchange ideas, and expand your network in our inspiring coworking space.",
    desc3: "Elevate your workday at Workhive. Immerse yourself in a space designed for productivity and comfort. Enjoy high-speed Wi-Fi, ergonomic seating, and access to shared amenities. Whether you're a digital nomad or a busy professional, Workhive's Open Seats provide the ideal environment to focus and thrive.",
    img: ServiceImg1,
  },
  {
    id: 2,
    title: "Dedicated Office",
    desc1:
      "Establish a professional and inspiring workspace with Workhive's Dedicated Offices. Enjoy the privacy and focus of your own private office, complete with customizable furniture and ample natural light.",
    desc2:
      "Whether you're a growing startup or an established business, Workhive's Dedicated Offices offer the flexibility to expand your team. Customize your space to suit your specific needs and enjoy the prestige of a dedicated address.",
    desc3:
      "Experience the ultimate in productivity and professionalism at Workhive. Our Dedicated Offices provide a quiet and focused environment, perfect for important meetings and client interactions.",
    img: ServiceImg2,
  },
  {
    id: 3,
    title: "Meeting Room",
    desc1:
      "Host impactful meetings at Workhive. Our versatile meeting rooms cater to every need, from intimate brainstorming sessions to large-scale presentations. Equipped with comfortable furnishings, our spaces foster collaboration and productivity.",
    desc2:
      "Choose the perfect room for your team. Whether you need a huddle room for quick discussions or a boardroom for strategic planning, Workhive has the ideal space. Impress clients and inspire your team in our professional and inspiring environment.",
    desc3:
      "Elevate your meetings at Workhive. Experience seamless technology integration, natural lighting, and ergonomic seating. Our dedicated team ensures your meeting runs smoothly, allowing you to focus on what matters most.",
  
    img: ServiceImg3,
  },
];
