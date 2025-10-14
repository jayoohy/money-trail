import { ChartBarDefault } from "../charts/barchart";
import { ChartPieDonutText } from "../charts/piechart";
import { Card, CardContent } from "../ui/card";

const Spending = () => {
  return (
    <div className="mt-6">
      <p className="font-semibold text-lg text-foreground pb-2">
        Spending Breakdown
      </p>
      <Card className="py-0 dark:bg-green/10">
        <CardContent className="px-3 pb-4 md:hidden">
          <ChartPieDonutText />
        </CardContent>

        <CardContent className="px-0 pb-4 hidden md:block">
          <ChartBarDefault />
        </CardContent>
      </Card>
    </div>
  );
};

export default Spending;
