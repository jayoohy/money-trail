"use client";

import { Bar, BarChart, XAxis } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useSelector } from "react-redux";
import { selectTransactions } from "@/store/transactions/transactions.selector";
import { stringToColor } from "./piechart";
import { chartConfig, type ChartTextProps } from "./chart-constants";
import { selectCurrency } from "@/store/settings/settings.selector";

export const description = "A bar chart";

function ChartBarDefault({ expense }: ChartTextProps) {
  const transactions = useSelector(selectTransactions);
  const currency = useSelector(selectCurrency);

  const expenseData = transactions
    ?.filter((t) => t.type === "expense")
    .reduce((acc, t) => {
      const existing = acc.find((item) => item.category === t.category);
      if (existing) {
        existing.amount += t.amount;
      } else {
        acc.push({
          category: t.category,
          amount: t.amount,
          fill: stringToColor(t.category),
        });
      }
      return acc;
    }, [] as { category: string; amount: number; fill: string }[]);

  return (
    <div>
      <div className="p-3">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Spending by Category
        </p>
        <p className="font-semibold text-black dark:text-white text-[1.3rem]">
          {currency}
          {expense || 0}
        </p>
      </div>
      <div className="flex justify-center">
        <ChartContainer className="h-[40vh] w-[50vw]" config={chartConfig}>
          <BarChart accessibilityLayer data={expenseData}>
            <XAxis
              dataKey="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="amount" radius={8} />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
}

export default ChartBarDefault;
