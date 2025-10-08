import Balance from "@/components/dashboard-components/balance.component";
import Overview from "@/components/dashboard-components/overview.component";
import Recent from "@/components/dashboard-components/recent.component";
import Spending from "@/components/dashboard-components/spending.component";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

const Dashboard = () => {
  return (
    <>
      <div className="bg-light-bg px-3 pb-30">
        <div className="flex justify-center">
          <h1 className="font-semibold text-xl pt-4 mb-6">Dashboard</h1>
          <div
            className={cn(
              "flex h-7 w-7 items-center justify-center mt-4 rounded-full",
              "bg-[#53d22d]/30 text-[#53d22d] absolute right-[7%]"
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
