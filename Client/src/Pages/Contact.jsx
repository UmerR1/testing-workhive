import React from "react";
import BannerSec from "../Components/BannerSec";
import bgImage from "../assets/images/ContactImage.png";
import CenterText from "../Components/CenterText.jsx";
import Image from "../assets/images/getStarted.jpg";
import Email from "../assets/emailLogo.svg";
import Location from "../assets/locationLogo.svg";
import Message from "../assets/chatLogo.svg";
import ContactForm from "../Components/ContactForm.jsx";

function Contact() {
  return (
    <section>
      <BannerSec
        bgImage={bgImage}
        align="items-center"
        size="text-2xl md:text-[48px]"
        text="text-white"
        title="Vibe with the Right Tribes!"
        overlayOpacity={0.3}
      />
      <div className="container mx-auto flex flex-col items-center justify-center">
      <CenterText
          text="text-lg md:text-[31px]"
          desc="WorkHive offers economical co-working solutions tailored to meet your business requirements and goals, whether you need a space for a day, a month, or a whole year. No matter the size of your need be it small, medium, or large WorkHive provides the flexibility to customize your workspace to fit your unique vision. Our cost-effective, adaptable workspace solutions are designed to foster a productive environment, making WorkHive the ideal choice for startups aiming to maximize efficiency without breaking the bank."
        />

        {/* lets get started */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:mt-20">
          <div
            data-aos="fade-right"
            data-aos-duration="1600"
            data-aos-delay="400"
            data-aos-once="true"
          >
            <img
              src={Image}
              alt="Company Office"
              className="h-[350px] w-[330px] object-cover shadow-custom md:h-[460px] md:w-[427px] rounded-xl "
            />
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="1600"
            data-aos-delay="400"
            data-aos-once="true"
            className="w-max px-4"
          >
            <div className="bg-white p-6 space-y-10 md:mt-10">
              <h2
                style={{ fontFamily: "FontSemi" }}
                className="text-2xl md:text-3xl text-center text-[rgba(55,20,0,1)] font-bold mb-4"
              >
                Let's Get Started
              </h2>
              <div className="mb-4 flex items-cente space-x-4">
                <img src={Location} className="h-[43px] w-[41]" alt="Logo" />
                <p className="w-full text-[rgba(55,20,0,1)] text-lg md:text-3xl font-sans font-normal border-b-2 border-[rgba(0,0,0,1)] pb-2">
                768C Street 16, Block C Faisal Town, Lahore.
                </p>
              </div>
              <div className="mb-4 flex items-center space-x-4">
                <img src={Message} className="h-[43px] w-[41]" alt="Logo" />
                <p className="w-full text-[rgba(55,20,0,1)] text-lg md:text-3xl font-sans font-normal border-b-2 border-[rgba(0,0,0,1)] pb-2">
                +92 (316) 4517106
                </p>
              </div>
              <div className="mb-4 flex items-center space-x-4">
                <img src={Email} className="h-[43px] w-[41]" alt="Logo" />
                <p className="w-full text-[rgba(55,20,0,1)] text-lg md:text-3xl font-sans font-normal border-b-2 border-[rgba(0,0,0,1)] pb-2">
                info@workhive.com.pk
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* contact form */}
        <div
          data-aos="fade-up"
          data-aos-duration="1600"
          data-aos-delay="400"
          data-aos-once="true"
          className="mt-16"
        >
          <ContactForm title="We’d love to hear from you!" align="mx-auto" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
