import DeleteDialog from "@/components/transaction-components/delete-dialog";
import TransactionItem1 from "@/components/transaction-components/laptop";
import TransactionItem2 from "@/components/transaction-components/mobile";
import { selectTransactions } from "@/store/transactions/transactions.selector";
import { clearTransactions } from "@/store/transactions/transactions.slice";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

const CategoryPage = () => {
  const categoryName = useParams();
  const transactions = useSelector(selectTransactions);
  const dispatch = useDispatch();

  const filteredTransactions = transactions?.filter(
    (tx) =>
      tx.category
        .split(" ")[0]
        .replace(/[^a-zA-Z0-9]/g, "")
        .toLowerCase() === categoryName.category
  );
  console.log(filteredTransactions);

  const clearTransactionsHandler = () => dispatch(clearTransactions());

  return (
    <div className="px-4 md:px-6 lg:px-20 xl:px-30 space-y-6 pb-40 md:pb-35">
      {/* Header */}
      <div className="flex justify-center">
        <h1 className="font-semibold text-xl dark:text-white pt-4 mb-6">
          {categoryName.category &&
            categoryName.category.charAt(0).toUpperCase() +
              categoryName.category.slice(1)}
        </h1>
      </div>

      {/* Table View (Desktop) */}
      {filteredTransactions?.length ? (
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
              {filteredTransactions.map((t) => {
                return <TransactionItem1 key={t.id} t={t} />;
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="hidden md:flex h-[40vh] mb-0 font-bold items-center justify-center">
          You dont have any transactions in this category. Add a transaction...
        </div>
      )}

      {/* Card View (Mobile) */}
      <div className="space-y-3 md:hidden">
        {filteredTransactions?.length ? (
          filteredTransactions.map((t) => {
            return <TransactionItem2 key={t.id} t={t} />;
          })
        ) : (
          <div className="h-[60vh] font-bold flex items-center text-center">
            You dont have any transactions in this category. Add a
            transaction...
          </div>
        )}
      </div>

      {filteredTransactions?.length && (
        <DeleteDialog
          trigger={
            <DialogTrigger className="w-full flex justify-center mt-10 md:mt-8">
              <div className="bg-red-500/30 hover:bg-red-500/20 text-red-500 p-2.5 rounded-lg">
                Clear All Transactions
              </div>
            </DialogTrigger>
          }
          callback={clearTransactionsHandler}
          clear={true}
        />
      )}
    </div>
  );
};

export default CategoryPage;
