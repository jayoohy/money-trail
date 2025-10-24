import TransactionItem1 from "@/components/transaction-components/laptop";
import TransactionItem2 from "@/components/transaction-components/mobile";
import { SheetDemo } from "@/components/transaction-components/sheet";
import { SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { selectTransactions } from "@/store/transactions/transactions.selector";
import { Plus } from "lucide-react";
import { useSelector } from "react-redux";

export default function TransactionsPreview() {
  const transactions = useSelector(selectTransactions);

  return (
    <div className="bg-bg h-[100vh] px-4 md:px-6 lg:px-20 xl:px-30 space-y-6">
      {/* Header */}
      <div className="flex justify-center">
        <h1 className="font-semibold text-xl dark:text-white pt-4 mb-6">
          Transactions
        </h1>
        <SheetDemo
          trigger={
            <SheetTrigger asChild>
              <div
                className={cn(
                  "flex h-7 w-7 items-center justify-center mt-4 rounded-full",
                  "bg-green/30 hover:bg-green/40 text-green absolute right-[7%]"
                )}
              >
                <Plus />
              </div>
            </SheetTrigger>
          }
        />
      </div>

      {/* Table View (Desktop) */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-y-5">
          <thead>
            <tr className="text-sm uppercase">
              <th className="text-left px-3 py-2">Date</th>
              <th className="text-left px-3 py-2">Description</th>
              <th className="text-left px-3 py-2">Category</th>
              <th className="text-left px-3 py-2">Type</th>
              <th className="text-right px-3 py-2">Amount</th>
              <th className="text-center px-3 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="py-6">
            {transactions ? (
              transactions.map((t) => {
                return <TransactionItem1 key={t.id} t={t} />;
              })
            ) : (
              <div>Add a transaction</div>
            )}
          </tbody>
        </table>
      </div>

      {/* Card View (Mobile) */}
      <div className="space-y-3 md:hidden">
        {transactions ? (
          transactions.map((t) => {
            return <TransactionItem2 key={t.id} t={t} />;
          })
        ) : (
          <div>Add a transaction</div>
        )}
      </div>
    </div>
  );
}
