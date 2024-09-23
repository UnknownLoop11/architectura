import {
  Header,
  Hero,
  ServiceCard,
  InfoCard,
  Carousel,
  Footer,
} from "./components";
import {
  interiorDesign,
  interiorDesign2,
  heroImg,
  portfolio,
  arrowRight,
} from "./assets";
import { testimonials } from "./data";

const App = () => {
  return (
    <>
      <main className="flex flex-col gap-y-20">
        <Header />
        <Hero />
        <hr />
        {/* Services Section  */}
        <div className=" mx-auto grid items-center justify-center gap-x-32 gap-y-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            img={interiorDesign}
            title="Residential Architecture"
            description="Bespoke homes designed with modern functionality."
          />

          <ServiceCard
            img={interiorDesign2}
            title="Commercial Spaces"
            description="Innovative workspaces that enhance productivity."
          />

          <ServiceCard
            img={heroImg}
            title="Interior Design"
            description="Creating beautiful and sustainable living environments."
          />
        </div>
        {/* Portfolio Section  */}
        <div className="w-full p-20 bg-accent bg-opacity-30">
          <div className="w-fit mx-auto flex flex-col items-end border-2 rounded-t-xl shadow-xl">
            <img src={portfolio} alt="portfolio" className="mx-auto" />
            <hr className="w-full" />
            <a
              href="#"
              role="button"
              className="py-1.5 font-secondary font-semibold flex gap-x-1 hover:scale-105 transition-all"
            >
              Explore our projects
              <img src={arrowRight} alt="arrow-right" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* About Us Section */}
        <div className="w-full lg:w-1/2 lg:mx-auto px-16 py-5">
          <h1 className="text-3xl font-primary font-extrabold">About Us</h1>
          <p className="font-secondary mt-2 text-pretty">
            At Architectura, we believe in the power of design to transform the
            way we live, work, and interact with our surroundings. With a
            commitment to modern architecture and interior design, we create
            spaces that are not only visually striking but also functional,
            sustainable, and responsive to the needs of our clients.
          </p>
          <a href="#" className="flex my-3 underline font-semibold">
            Learn more about our team
            <img src={arrowRight} alt="arrow-right" className="w-6 h-6" />
          </a>

          <div className="mt-10 flex flex-col md:flex-row gap-5 items-start justify-around">
            <InfoCard title="Our Mission">
              <p>
                Our mission is simple: to design spaces that elevate everyday
                life. By combining creativity with cutting-edge technology and
                sustainable practices, we deliver results that are timeless,
                elegant, and tailored to the unique visions of our clients.
              </p>
            </InfoCard>

            <InfoCard title="Our Process">
              <ul className="font-secondary text-sm">
                <li>
                  Innovation: Pushing the boundaries of design and construction.
                </li>
                <li>
                  Sustainability: Creating eco-friendly and energy-efficient
                  environments.
                </li>
                <li>
                  Client-Centered Approach: Listening closely to your needs to
                  deliver bespoke solutions.
                </li>
                <li>
                  Quality: Using premium materials and craftsmanship in every
                  project.
                </li>
              </ul>
            </InfoCard>
          </div>
        </div>

        <hr />

        {/* Testimonials Section  */}

        <Carousel testimonials={testimonials} />

        {/* Footer Section */}
        <Footer />
      </main>
    </>
  );
};

export default App;
