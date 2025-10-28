"use client";

import { Label, Pie, PieChart } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useSelector } from "react-redux";
import { selectTransactions } from "@/store/transactions/transactions.selector";
import { selectCurrency } from "@/store/settings/settings.selector";
import { chartConfig, type ChartTextProps } from "./chart-constants";
import { useTheme } from "../themes/theme-provider";

// eslint-disable-next-line react-refresh/only-export-components
export function stringToColor(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const color = Math.floor(
    Math.abs(Math.sin(hash) * 16777215) % 16777215
  ).toString(16);
  return "#" + color.padStart(6, "0");
}

function ChartPieDonutText({ expense }: ChartTextProps) {
  const transactions = useSelector(selectTransactions);
  const currency = useSelector(selectCurrency);
  const { theme } = useTheme();

  const textColor = theme === "dark" ? "#ffffff" : "#000000";

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
    <div className="text-gray-600 dark:text-gray-400">
      <p className="pt-3 pl-1 text-sm">Spending by Category</p>
      <ChartContainer
        key={theme}
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={expenseData}
            dataKey="amount"
            nameKey="category"
            innerRadius={80}
            strokeWidth={5}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill={textColor}
                    >
                      <tspan x={viewBox.cx} y={(viewBox.cy || 0) - 28}>
                        Total spent
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="text-3xl font-bold"
                      >
                        {currency}
                        {expense || 0}
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>

      <div className="mt-2 space-y-2">
        {expenseData?.map((cat) => (
          <div key={cat.category} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: cat.fill }}
              ></span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {cat.category}
              </span>
            </div>
            <span className="font-medium">
              {currency}
              {cat.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChartPieDonutText;
