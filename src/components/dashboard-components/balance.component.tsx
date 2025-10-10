import { ChartAreaDefault } from "../charts/areachart";

const Balance = () => {
  return (
    <div className="mt-6 hidden md:grid">
      <p className="font-semibold text-[1.2rem] dark:text-white pb-2">
        Balance Over Time
      </p>
      <div className="bg-white dark:bg-[#1e2a1b] rounded-lg px-4 pb-4">
        <ChartAreaDefault />
      </div>
    </div>
  );
};

export default Balance;
