
const HotelStats = () => {
  return (
    <div className="-mt-28 sm:-mt-20 relative z-10 flex justify-center">
      {" "}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white rounded-xl shadow-lg p-6">
        <div className="flex flex-col items-center bg-cyan-50 px-2 sm:px-20 py-4 rounded-lg shadow-md">
          <h1>𝟚</h1>
          <p className="mt-1 text-center font-semibold">Restaurants</p>
        </div>
        <div className="flex flex-col items-center bg-cyan-50 px-2 sm:px-20 py-4 rounded-lg shadow-md">
          <h1>𝟝𝟘</h1>
          <p className="mt-1 text-center font-semibold">Rooms</p>
        </div>
        <div className="flex flex-col items-center bg-cyan-50 px-2 sm:px-20 py-4 rounded-lg shadow-md">
          <h1>𝟠</h1>
          <p className="mt-1 text-center font-semibold">Beaches</p>
        </div>
        <div className="flex flex-col items-center bg-cyan-50 px-2 sm:px-20 py-4 rounded-lg shadow-md">
          <h1>𝟚𝟝𝟘𝟘</h1>
          <p className="mt-1 text-start sm:text-center font-semibold">Guests</p>
        </div>
      </div>
    </div>
  );
};

export default HotelStats