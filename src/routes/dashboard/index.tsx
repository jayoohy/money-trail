import Balance from "@/components/dashboard-components/balance.component";
import Overview from "@/components/dashboard-components/overview.component";
import Recent from "@/components/dashboard-components/recent.component";
import Spending from "@/components/dashboard-components/spending.component";
import { cn } from "@/lib/utils";
import { selectCategories } from "@/store/categories/categories.selector";
import { Plus } from "lucide-react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const categories = useSelector(selectCategories);
  console.log(categories);

  return (
    <>
      <div className="bg-bg px-3 pb-30">
        <div className="flex justify-center">
          <h1 className="font-semibold text-xl dark:text-white pt-4 mb-6">
            Dashboard
          </h1>
          <div
            className={cn(
              "flex h-7 w-7 items-center justify-center mt-4 rounded-full",
              "bg-green/30 hover:bg-green/40 text-green absolute right-[7%]"
            )}
          >
            <Plus />
          </div>
        </div>
        <Overview />
        <Spending />
        <Balance />
        <Recent />
      </div>
    </>
  );
};

export default Dashboard;
