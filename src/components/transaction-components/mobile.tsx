import {
  ChartColumnDecreasingIcon,
  ChartColumnIncreasingIcon,
} from "lucide-react";
import type { FC } from "react";
import type { TransactionItemProps } from "./laptop";
import DropdownMenuDialog from "./dropdown";

const TransactionItem2: FC<TransactionItemProps> = ({ t }) => {
  return (
    <div className="p-3 rounded-lg bg-white dark:bg-green/10 flex justify-between items-center shadow-sm">
      <div className="flex items-center gap-2">
        {t.type === "income" ? (
          <ChartColumnIncreasingIcon className="h-6 w-6 text-green" />
        ) : (
          <ChartColumnDecreasingIcon className="text-red-500 h-6 w-6" />
        )}
        <div>
          <p className="font-medium">{t.desc}</p>
          <p className="text-xs text-gray-500">{t.category}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <p
          className={`font-semibold ${
            t.type === "income" ? "text-green" : "text-red-500"
          }`}
        >
          {t.type === "income" ? "+" : "-"}₦{t.amount.toLocaleString()}
        </p>
        <DropdownMenuDialog t={t} />
      </div>
    </div>
  );
};

export default TransactionItem2;
