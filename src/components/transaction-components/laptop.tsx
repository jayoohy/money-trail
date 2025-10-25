import type { Transaction } from "@/store/transactions/transactions.types";
import {
  ChartColumnDecreasingIcon,
  ChartColumnIncreasingIcon,
  Edit2,
  Trash2,
} from "lucide-react";
import { useState, type FC } from "react";
import { DialogTrigger } from "@/components/ui/dialog";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "@/store/transactions/transactions.slice";
import DeleteDialog from "./delete-dialog";
import { SheetDemo } from "./sheet";

export type TransactionItemProps = {
  t: Transaction;
};

const TransactionItem1: FC<TransactionItemProps> = ({ t }) => {
  const dispatch = useDispatch();
  const [openSheet, setOpenSheet] = useState(false);

  const deleteHandler = () => {
    dispatch(deleteTransaction(t.id));
  };

  const editHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setOpenSheet(true);
  };

  return (
    <>
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
          <button
            onClick={(e) => editHandler(e)}
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
          >
            <Edit2 size={16} />
          </button>
          <DeleteDialog
            trigger={
              <DialogTrigger>
                <div className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition">
                  <Trash2 size={16} />
                </div>
              </DialogTrigger>
            }
            callback={deleteHandler}
          />
        </td>
      </tr>
      <SheetDemo
        open={openSheet}
        onOpenChange={setOpenSheet}
        transactionToEdit={t}
      />
    </>
  );
};

export default TransactionItem1;
