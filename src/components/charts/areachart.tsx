"use client";

import * as React from "react";
import { Area, AreaChart, XAxis } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A simple area chart";

const chartData = [
  { month: "Jan", amount: 186 },
  { month: "Feb", amount: 305 },
  { month: "March", amount: 237 },
  { month: "April", amount: 73 },
  { month: "May", amount: 209 },
  { month: "June", amount: 50 },
  { month: "July", amount: 250 },
  { month: "August", amount: 270 },
  { month: "Sept", amount: 93 },
  { month: "Oct", amount: 100 },
  { month: "Nov", amount: 173 },
  { month: "Dec", amount: 200 },
];

const chartConfig = {
  Food: { color: "var(--chart-1)" },
  Transport: { color: "var(--chart-2)" },
  Fun: { color: "var(--chart-3)" },
  Utilities: { color: "var(--chart-4)" },
  Others: { color: "var(--chart-5)" },
} satisfies ChartConfig;

export function ChartAreaDefault() {
  const totalAmount = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.amount, 0);
  }, []);
  return (
    <div className="text-gray-600 dark:text-gray-400">
      <div className="p-3">
        <p className="text-sm">Balance Snapshot</p>
        <p className="font-semibold text-black dark:text-white text-[1.3rem]">
          ${totalAmount.toLocaleString()}
        </p>
      </div>
      <div className="flex justify-center">
        <ChartContainer className="h-[40vh] w-[60vw]" config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <defs>
              <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="green" stopOpacity={0.8} />
                <stop offset="100%" stopColor="green" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="amount"
              type="natural"
              fill="url(#greenGradient)"
              stroke="green"
            />
          </AreaChart>
        </ChartContainer>
      </div>
    </div>
  );
}
