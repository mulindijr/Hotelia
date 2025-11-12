import f1 from "../assets/services/f-1.png";
import f2 from "../assets/services/f-2.png";
import f3 from "../assets/services/f-3.png";
import f4 from "../assets/services/f-4.png";

const HotelFeatures = () => {
  return (
    <div className="-mt-32 sm:-mt-24 relative z-10 flex justify-center">
      {" "}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white rounded-xl shadow-lg p-6">
        <div className="flex flex-col items-center bg-cyan-50 px-2 sm:px-20 py-4 rounded-lg shadow-md">
          <img src={f1} alt="airport transport" className="h-8 w-14 sm:h-20 sm:w-28" />
          <p className="mt-4 text-center font-semibold">Airport Transport</p>
        </div>
        <div className="flex flex-col items-center bg-cyan-50 px-2 sm:px-20 py-4 rounded-lg shadow-md">
          <img src={f2} alt="all inclusive" className="h-8 w-14 sm:h-20 sm:w-28" />
          <p className="mt-4 text-center font-semibold">All Inclusive</p>
        </div>
        <div className="flex flex-col items-center bg-cyan-50 px-2 sm:px-20 py-4 rounded-lg shadow-md">
          <img src={f3} alt="air conditioned" className="h-8 w-14 sm:h-20 sm:w-28" />
          <p className="mt-4 text-center font-semibold">Air-conditioned</p>
        </div>
        <div className="flex flex-col items-center bg-cyan-50 px-2 sm:px-20 py-4 rounded-lg shadow-md">
          <img src={f4} alt="under protection" className="h-8 w-14 sm:h-20 sm:w-28" />
          <p className="mt-4 text-start sm:text-center font-semibold">Under Protection</p>
        </div>
      </div>
    </div>
  );
};

export default HotelFeatures