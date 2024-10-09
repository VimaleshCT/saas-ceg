import { benefits } from "../../constants";
import Section from "../Section";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <div className="container mx-auto px-4">
          {/* Responsive grid setup */}
          <div className="grid grid-cols-1 gap-6">
            {benefits.map((item) => (
              <div
                className="relative p-0.5 bg-cover"
                style={{
                  backgroundImage: `url(${item.backgroundUrl})`,
                }}
                key={item.id}
              >
                <div className="relative z-2 flex flex-col min-h-[11rem] p-[1.2rem] pointer-events-none">
                  {/* Adjusted the size of text elements */}
                  <h5 className="font-bold text-2xl mb-5">{item.title}</h5>
                  <p className="body-2 mb-6 text-n-3 text-lg">{item.text}</p>
                  <div className="mt-auto"></div>
                </div>

                {item.light}

                <div
                  className="absolute inset-0.5 bg-n-8"
                  style={{ clipPath: "url(#benefits)" }}
                >
                  {/* Image container adjusted for responsiveness */}
                  <div className="absolute inset-0 opacity-90 transition-opacity hover:opacity-10">
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
