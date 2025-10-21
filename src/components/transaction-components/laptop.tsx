import type { Transaction } from "@/store/transactions/transactions.types";
import {
  ChartColumnDecreasingIcon,
  ChartColumnIncreasingIcon,
  Edit2,
  Trash2,
} from "lucide-react";
import type { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "@/store/transactions/transactions.slice";

export type TransactionItemProps = {
  t: Transaction;
};

const TransactionItem1: FC<TransactionItemProps> = ({ t }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteTransaction(t.id));
  };

  return (
    <tr className="bg-white dark:bg-green/10 transition rounded-md">
      <td className="px-3 py-2 text-sm text-gray-600 dark:text-gray-400">
        {t.date}
      </td>
      <td className="px-3 py-6 font-medium flex items-center gap-2">
        {t.type === "income" ? (
          <ChartColumnIncreasingIcon className="h-6 w-6 text-green" />
        ) : (
          <ChartColumnDecreasingIcon className="text-red-500 h-6 w-6" />
        )}
        {t.desc}
      </td>
      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">
        {t.category}
      </td>
      <td className="px-3 py-2">
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            t.type === "income"
              ? "bg-green/20 text-green"
              : "bg-red-500/20 text-red-500"
          }`}
        >
          {t.type}
        </span>
      </td>
      <td
        className={`px-3 py-2 text-right font-semibold ${
          t.type === "income" ? "text-green" : "text-red-500"
        }`}
      >
        {t.type === "income" ? "+" : "-"}₦{t.amount.toLocaleString()}
      </td>
      <td className="px-3 py-2 flex justify-center gap-3">
        <button className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition">
          <Edit2 size={16} />
        </button>
        <Dialog>
          <DialogTrigger>
            <div className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition">
              <Trash2 size={16} />
            </div>
          </DialogTrigger>
          <DialogContent className="dark:bg-bg">
            <DialogHeader>
              <DialogTitle className="text-center">
                Delete Transaction?
              </DialogTitle>
              <DialogDescription className="text-center">
                Confirm that you want to delete this transaction
              </DialogDescription>
            </DialogHeader>
            <button
              className="rounded-lg text-center mx-[40%] bg-red-500/30 hover:bg-red-500/20 text-red-500 p-1"
              onClick={() => deleteHandler()}
            >
              Delete
            </button>
          </DialogContent>
        </Dialog>
      </td>
    </tr>
  );
};

export default TransactionItem1;
