import { lazy } from "react";
import { Card, CardContent } from "../ui/card";
const ChartPieDonutText = lazy(() => import("@/components/charts/piechart"));
const ChartBarDefault = lazy(() => import("@/components/charts/barchart"));

type SpendingProps = {
  expense: number | undefined;
};

const Spending = ({ expense }: SpendingProps) => {
  return (
    <div className="mt-6">
      <p className="font-semibold text-lg text-foreground pb-2">
        Spending Breakdown
      </p>
      <Card className="py-0 dark:bg-green/10">
        <CardContent className="px-3 pb-4 md:hidden">
          <ChartPieDonutText expense={expense && expense} />
        </CardContent>

        <CardContent className="px-0 pb-4 hidden md:block">
          <ChartBarDefault expense={expense} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Spending;
