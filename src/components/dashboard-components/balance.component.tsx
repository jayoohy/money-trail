import { ChartAreaDefault } from "../charts/areachart";
import type { ChartTextProps } from "../charts/chart-constants";
import { Card, CardContent } from "../ui/card";

const Balance = ({ balance }: ChartTextProps) => {
  return (
    <div className="mt-6 hidden md:block">
      <p className="font-semibold text-lg text-foreground pb-2">
        Balance Over Time
      </p>
      <Card className="py-0 dark:bg-green/10">
        <CardContent className="px-0 pb-4">
          <ChartAreaDefault balance={balance} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Balance;
