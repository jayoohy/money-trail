"use client";

import { Bar, BarChart, XAxis } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A bar chart";

const chartData = [
  { category: "Food", amount: 186, fill: "#4ade80" },
  { category: "Transport", amount: 305, fill: "#facc15" },
  { category: "Fun", amount: 237, fill: "#60a5fa" },
  { category: "Utilities", amount: 73, fill: "#4ade80" },
  { category: "Others", amount: 209, fill: "#4ade80" },
];

const chartConfig = {
  Food: { color: "var(--chart-1)" },
  Transport: { color: "var(--chart-2)" },
  Fun: { color: "var(--chart-3)" },
  Utilities: { color: "var(--chart-4)" },
  Others: { color: "var(--chart-5)" },
} satisfies ChartConfig;

export function ChartBarDefault() {
  return (
    <div className="flex justify-center">
      <ChartContainer className="h-[40vh] w-[50vw]" config={chartConfig}>
        <BarChart accessibilityLayer data={chartData}>
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
          <Bar dataKey="amount" fill="var(--color-desktop)" radius={8} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
