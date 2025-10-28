"use client";

import { useSelector } from "react-redux";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { selectTransactions } from "@/store/transactions/transactions.selector";
import type { Transaction } from "@/store/transactions/transactions.types";
import { selectCurrency } from "@/store/settings/settings.selector";
import { lazy } from "react";
const ChartPieDonutText = lazy(() => import("@/components/charts/piechart"));
const ChartAreaDefault = lazy(() => import("@/components/charts/areachart"));
const BarChartDemo = lazy(() => import("@/components/charts/barchart2"));

export default function ReportsPage() {
  const transactions = useSelector(selectTransactions);

  const currency = useSelector(selectCurrency);

  // Summary values
  const totalIncome = transactions
    ?.filter((t: Transaction) => t.type === "income")
    .reduce((sum: number, t: Transaction) => sum + t.amount, 0);

  const totalExpense = transactions
    ?.filter((t: Transaction) => t.type === "expense")
    .reduce((sum: number, t: Transaction) => sum + t.amount, 0);

  const balance = (totalIncome ?? 0) - (totalExpense ?? 0);

  // Savings rate (percentage)
  const savingsRate =
    totalIncome && totalIncome > 0
      ? Math.max(
          0,
          Math.min(
            ((totalIncome - (totalExpense ?? 0)) / totalIncome) * 100,
            100
          )
        )
      : 0;

  // Top spending category
  const expenseCategories: Record<string, number> = {};
  transactions?.forEach((t: Transaction) => {
    if (t.type === "expense") {
      expenseCategories[t.category] =
        (expenseCategories[t.category] || 0) + t.amount;
    }
  });
  const topCategory = Object.entries(expenseCategories).sort(
    (a, b) => b[1] - a[1]
  )[0];

  return (
    <div className="px-6 py-6 space-y-8 min-h-screen mb-25">
      <h1 className="text-2xl text-center font-bold dark:text-white">
        Reports
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 *:px-2">
        <Card className="bg-white dark:bg-green/10 text-center py-3">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Total Income
            </CardTitle>
          </CardHeader>
          <CardContent className="py-0">
            <p className="text-lg font-semibold text-green-600">
              {currency}
              {totalIncome?.toLocaleString()}
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-green/10 text-center py-3">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Total Expenses
            </CardTitle>
          </CardHeader>
          <CardContent className="py-0">
            <p className="text-lg font-semibold text-red-500">
              {currency}
              {totalExpense?.toLocaleString()}
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-green/10 text-center py-3">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Balance
            </CardTitle>
          </CardHeader>
          <CardContent className="py-0">
            <p
              className={`text-lg font-semibold ${
                balance && balance >= 0 ? "text-green-600" : "text-red-500"
              }`}
            >
              {currency}
              {balance?.toLocaleString()}
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-green/10 text-center py-3">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Top Spending Category
            </CardTitle>
          </CardHeader>
          <CardContent className="py-0">
            <p className="text-sm font-medium dark:text-white">
              {topCategory ? topCategory[0] : "—"}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {currency}
              {topCategory ? topCategory[1].toLocaleString() : 0}
            </p>
          </CardContent>
        </Card>

        {/* Savings Rate Card */}
        <Card className="bg-white dark:bg-green/10 text-center py-3">
          <CardHeader className="py-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-300 flex items-center justify-center gap-1">
              Savings Rate
              <span className="text-green-600">💰</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="py-0">
            {totalIncome && totalIncome > 0 ? (
              <>
                <p className="text-lg font-semibold dark:text-white">
                  {savingsRate.toFixed(1)}%
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{
                      width: `${savingsRate}%`,
                    }}
                  ></div>
                </div>
              </>
            ) : (
              <p className="text-sm text-gray-400">No data available</p>
            )}
          </CardContent>
        </Card>

        <div className="col-span-2 md:col-span-3 bg-white dark:bg-green/10 p-4 rounded-lg shadow-sm">
          <h3 className="font-semibold text-gray-700 dark:text-white mb-3">
            Insights
          </h3>

          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            {topCategory && (
              <li>
                🏆 Your top spending category is <b>{topCategory[0]}</b>.
              </li>
            )}
            {totalIncome && totalIncome > 0 && (
              <li>
                💡 You saved <b>{savingsRate.toFixed(1)}%</b> of your income
                this period.
              </li>
            )}
            <li>
              📈 Try setting a budget to track categories more efficiently.
            </li>
          </ul>
        </div>
      </div>

      <BarChartDemo />
      <Card className="py-0 dark:bg-green/10">
        <CardContent className="px-3 pb-4">
          <ChartPieDonutText expense={totalExpense} />
        </CardContent>
      </Card>
      <Card className="py-0 dark:bg-green/10">
        <CardContent className="px-0 pb-4">
          <ChartAreaDefault balance={balance} />
        </CardContent>
      </Card>
    </div>
  );
}
