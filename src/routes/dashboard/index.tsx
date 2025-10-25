import * as React from "react";
import Balance from "@/components/dashboard-components/balance.component";
import Overview from "@/components/dashboard-components/overview.component";
import Recent from "@/components/dashboard-components/recent.component";
import Spending from "@/components/dashboard-components/spending.component";
import { useSelector } from "react-redux";
// import { selectCurrency } from "@/store/settings/settings.selector";
import { selectTransactions } from "@/store/transactions/transactions.selector";

const Dashboard = () => {
  // const currency = useSelector(selectCurrency);
  const transactions = useSelector(selectTransactions);

  const incomeTransactions = React.useMemo(() => {
    return transactions?.filter((tx) => tx.type === "income");
  }, [transactions]);
  const expenseTransactions = React.useMemo(() => {
    return transactions?.filter((tx) => tx.type === "expense");
  }, [transactions]);

  const totalIncome = React.useMemo(() => {
    return incomeTransactions?.reduce((acc, val) => acc + val.amount, 0);
  }, [incomeTransactions]);
  const totalExpense = React.useMemo(() => {
    return expenseTransactions?.reduce((acc, val) => acc + val.amount, 0);
  }, [expenseTransactions]);

  const balance = totalIncome && totalExpense && totalIncome - totalExpense;

  return (
    <>
      <div className="px-3 pb-30">
        <div className="flex justify-center">
          <h1 className="font-semibold text-xl dark:text-white pt-4 mb-6">
            Dashboard
          </h1>
        </div>
        <Overview
          balance={balance && balance}
          income={totalIncome && totalIncome}
          expense={totalExpense && totalExpense}
        />
        <Spending expense={totalExpense && totalExpense} />
        <Balance balance={balance && balance} />
        <Recent />
      </div>
    </>
  );
};

export default Dashboard;
