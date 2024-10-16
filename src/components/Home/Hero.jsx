import curve from "../../../public/static/assets/hero/curve.png";
// import robot from "../../assets/hero/banner.jpg"; //
import Button from "../Button";
import Section from "../Section";
import { useRef } from "react";
import { Link as Li } from "react-scroll";
import "./Hero.css";
import saas from "../../../public/static/assets/SAAS_silver.png";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <section id="hero">
      <ul class="circles">
        <li><img src={saas} alt="circle" /></li>
        <li><img src={saas} alt="circle" /></li>
        <li><img src={saas} alt="circle" /></li>
        <li><img src={saas} alt="circle" /></li>
        <li><img src={saas} alt="circle" /></li>
        <li><img src={saas} alt="circle" /></li>
        <li><img src={saas} alt="circle" /></li>
        <li><img src={saas} alt="circle" /></li>
        <li><img src={saas} alt="circle" /></li>
        <li><img src={saas} alt="circle" /></li>
      </ul>
      <Section
        className="pt-[12rem] -mt-[5.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="hero"
      >

        <div className="container relative" ref={parallaxRef}>
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
            {/* <h1 className="h1 mb-6 font-bold text-6xl text-center text-gradient">
              Students Association and Arts Society of{" "}
              <span className="inline-block relative text-indigo-600">
                CEG{" "}
                <img
                  src={curve}
                  className="absolute top-full left-0 w-full xl:-mt-2"
                  width={624}
                  height={28}
                  alt="Curve"
                />
              </span>
            </h1> */}
            <h1 className="h1 mb-6 font-bold md:text-6xl sm:text-5xl text-4xl text-indigo-600 h1-animate">
              Students Association and Arts Society of{" "}
              <span className="inline-block relative text-orange-500 h1-ceg">
                CEG{" "}
                <img
                  src={curve}
                  className="absolute top-full left-0 w-full xl:-mt-2"
                  width={624}
                  height={28}
                  alt="Curve"
                />
              </span>
            </h1>
            <p
              style={{
                animation: "fade-up 1.5s ease-in-out forwards",
              }}
              className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8"
            >
              "மாணவர்கள் மற்றும் கலை கூட்டமைப்பு"
              <br />
              SAAS is known for organising multifarious activities for ensuring
              the all-round development of the students
            </p>

            <Li to="events" smooth={true} spy={true}>
              <Button white>Explore SAAS</Button>
            </Li>
          </div>
          {/* <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div>
                <img src={robot} width={2024} height={200} alt="AI" />
              </div>
            </div>
          </div>
        </div> */}
        </div>
      </Section>
    </section>
  );
};

export default Hero;
