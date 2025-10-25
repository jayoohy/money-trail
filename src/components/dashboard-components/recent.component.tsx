import { useSelector } from "react-redux";
import { selectTransactions } from "@/store/transactions/transactions.selector";
import TransactionItem1 from "../transaction-components/laptop";
import TransactionItem2 from "../transaction-components/mobile";

const Recent = () => {
  const transactions = useSelector(selectTransactions);
  return (
    <section className="mt-6">
      <h2 className="font-semibold text-lg pb-2 text-foreground">
        Recent Transactions
      </h2>

      {/* Table View (Desktop) */}
      {transactions ? (
        <div className="bg-green/5 hidden md:block overflow-x-auto">
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
              {transactions
                .slice(-5)
                .reverse()
                .map((t) => {
                  return <TransactionItem1 key={t.id} t={t} />;
                })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="hidden md:flex h-[40vh] mb-0 font-bold items-center justify-center">
          You dont have any transactions. Add a transaction...
        </div>
      )}

      {/* Card View (Mobile) */}
      <div className="space-y-3 md:hidden">
        {transactions ? (
          transactions
            .slice(-5)
            .reverse()
            .map((t) => {
              return <TransactionItem2 key={t.id} t={t} />;
            })
        ) : (
          <div className="h-[60vh] font-bold flex items-center text-center">
            You dont have any transactions. Add a transaction...
          </div>
        )}
      </div>
    </section>
  );
};

export default Recent;
