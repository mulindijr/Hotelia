import heroImage from "../assets/hero/hero.jpg";

const AboutSection = () => {
  return (
    <div className="bg-cyan-50 -mt-40 sm:-mt-20 pt-44 pb-40 sm:pt-40 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-16 p-6 sm:p-8 bg-white rounded-2xl shadow-lg">
        {/* First section */}
        <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
          <img
            src={heroImage}
            alt="Hotel Experience"
            className="w-full sm:w-1/2 h-auto rounded-lg object-cover"
          />
          <div className="flex flex-col gap-6 sm:gap-8 mt-6 sm:mt-20 text-center sm:text-left">
            <h1 className="text-2xl sm:text-4xl text-gray-700 leading-snug font-bold">
              We have 17+ years <br /> of Experience
            </h1>
            <p className="text-gray-600 text-base sm:text-lg">
              At Hotelia, we pride ourselves on providing exceptional
              hospitality for over 17 years. From luxurious accommodations to
              personalized services, we ensure every guest experiences comfort,
              elegance, and a warm welcome that makes you feel right at home.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer p-2 sm:p-3 text-base sm:text-lg text-white font-semibold rounded-full w-40 mx-auto sm:mx-0">
              More about us
            </button>
          </div>
        </div>

        {/* Second section */}
        <div className="flex flex-col sm:flex-row-reverse items-center gap-8 sm:gap-12">
          <img
            src={heroImage}
            alt="Adventure"
            className="w-full sm:w-1/2 h-auto rounded-lg object-cover"
          />
          <div className="flex flex-col gap-6 sm:gap-8 mt-6 sm:mt-20 text-center sm:text-left">
            <h1 className="text-2xl sm:text-4xl text-gray-700 leading-snug font-bold">
              Start your Amazing <br /> Adventure!
            </h1>
            <p className="text-gray-600 text-base sm:text-lg">
              Discover unforgettable experiences with Hotelia. Whether you’re
              exploring nearby attractions, enjoying our world-class amenities,
              or simply relaxing in our elegant rooms, every moment is crafted
              to create memories that last a lifetime.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer p-2 sm:p-3 text-base sm:text-lg text-white font-semibold rounded-full w-40 mx-auto sm:mx-0">
              Choose a room
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;