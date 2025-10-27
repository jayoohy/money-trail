import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { useSelector } from "react-redux";
import { selectTransactions } from "@/store/transactions/transactions.selector";
import type { Transaction } from "@/store/transactions/transactions.types";

const BarChartDemo = () => {
  const transactions = useSelector(selectTransactions);

  // Group data by month and separate income/expense totals
  const monthlyData = (transactions ?? []).reduce((acc, t: Transaction) => {
    const month = new Date(t.date).toLocaleString("default", {
      month: "short",
    });
    if (!acc[month]) acc[month] = { month, income: 0, expense: 0 };
    if (t.type === "income") acc[month].income += t.amount;
    else acc[month].expense += t.amount;
    return acc;
  }, {} as Record<string, { month: string; income: number; expense: number }>);

  const chartData = Object.values(monthlyData);

  const chartConfig = {
    income: {
      label: "Income",
      color: "var(--color-income)",
    },
    expense: {
      label: "Expense",
      color: "var(--color-expense)",
    },
  } satisfies ChartConfig;

  return (
    <Card className="bg-white dark:bg-green/10">
      <CardHeader>
        <CardTitle>Income vs Expense</CardTitle>
        <CardDescription>Monthly comparison</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          className="h-[40vh] w-[50vw] mx-auto"
          config={chartConfig}
        >
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="income" fill="green" radius={6} />
            <Bar dataKey="expense" fill="red" radius={6} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default BarChartDemo;
