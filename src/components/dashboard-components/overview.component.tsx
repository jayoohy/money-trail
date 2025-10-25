import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { FC } from "react";

interface OverviewProps {
  balance: number | undefined;
  income: number | undefined;
  expense: number | undefined;
}

const Overview: FC<OverviewProps> = ({ balance, income, expense }) => {
  return (
    <section>
      <h2 className="hidden md:flex font-semibold text-lg pb-2 text-foreground">
        Overview
      </h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-7">
        <Card className="col-span-2 md:col-span-3 py-3 dark:bg-green/10">
          <CardHeader className="flex flex-row items-start justify-between px-4">
            <div>
              <CardTitle className="text-sm text-muted-foreground">
                Balance
              </CardTitle>
              <p className="text-2xl font-semibold text-foreground">
                ₦{balance || 0}
              </p>
              <p className="text-sm text-muted-foreground">Available</p>
            </div>
            <img src="/images/balance.png" className="size-16" />
          </CardHeader>
        </Card>

        <Card className="col-span-1 md:col-span-2 flex flex-col justify-center py-0 dark:bg-green/10">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Income</p>
            <p className="text-xl font-semibold text-foreground">
              ₦{income || 0}
            </p>
          </CardContent>
        </Card>

        <Card className="col-span-1 md:col-span-2 flex flex-col justify-center py-0 dark:bg-green/10">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Expenses</p>
            <p className="text-xl font-semibold text-foreground">
              ₦{expense || 0}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Overview;
