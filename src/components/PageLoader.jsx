import { useEffect, useState } from "react";

const PageLoader = () => {
  const [percent, setPercent] = useState(0);

  // Fake smooth percentage increase
  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) return 100;
        return prev + 10;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50 space-y-4">
      {/* Hotel Name */}
      <h1 className="text-2xl font-semibold tracking-wide text-gray-700">
        Hotelia
      </h1>

      {/* Progress Bar */}
      <div className="w-64 h-1.5 bg-gray-200 overflow-hidden rounded-full">
        <div
          className="h-full bg-cyan-500 transition-all duration-150"
          style={{ width: `${percent}%` }}
        ></div>
      </div>

      {/* Percentage Display */}
      <p className="text-gray-600 text-sm font-medium">{percent}%</p>
    </div>
  );
};

export default PageLoader; 