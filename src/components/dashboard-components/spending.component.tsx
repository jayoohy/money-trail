import { ChartBarDefault } from "../charts/barchart";
import { ChartPieDonutText } from "../charts/piechart";

const Spending = () => {
  return (
    <div className="mt-6">
      <p className="font-semibold text-[1.2rem] pb-2">Spending Breakdown</p>
      <div className="bg-white md:hidden rounded-lg px-4 pb-4">
        <ChartPieDonutText />
      </div>
      <div className="bg-white rounded-lg px-4 pb-4 hidden md:grid">
        <ChartBarDefault />
      </div>
    </div>
  );
};

export default Spending;
