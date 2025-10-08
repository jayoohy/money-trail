import { ChartAreaDefault } from "../charts/areachart";

const Balance = () => {
  return (
    <div className="mt-6 hidden md:grid">
      <p className="font-semibold text-[1.2rem] pb-2">Balance Over Time</p>
      <div className="bg-white rounded-lg px-4 pb-4">
        <ChartAreaDefault />
      </div>
    </div>
  );
};

export default Balance;
