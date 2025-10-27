import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  ScrollText,
  Settings,
  SquareChartGantt,
} from "lucide-react";
import { Link, useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();
  const link = location.pathname;

  return (
    <>
      <div
        className={cn(
          "flex justify-between fixed bottom-0 right-0 left-0 bg-bg",
          "border-t-1 md:border-2 border-gray-600! p-5 text-gray-600 dark:text-gray-400",
          "mx-auto md:max-w-lg md:rounded-lg md:bottom-2",
          "*:hover:text-green"
        )}
      >
        <Link
          to="/dashboard"
          className={cn(
            "flex flex-col items-center",
            link === "/dashboard" && "text-green"
          )}
        >
          <LayoutDashboard className="size-7" />
          <p className="text-sm pt-1">Dashboard</p>
        </Link>
        <Link
          to="/transactions"
          className={cn(
            "flex flex-col items-center",
            link === "/transactions" && "text-green"
          )}
        >
          <ScrollText className="size-7" />
          <p className="text-sm pt-1">Transactions</p>
        </Link>
        <Link
          to="/reports"
          className={cn(
            "flex flex-col items-center",
            link === "/reports" && "text-green"
          )}
        >
          <SquareChartGantt className="size-7" />
          <p className="text-sm pt-1">Reports</p>
        </Link>
        <Link
          to="/settings"
          className={cn(
            "flex flex-col items-center",
            link === "/settings" && "text-green"
          )}
        >
          <Settings className="size-7" />
          <p className="text-sm pt-1">Settings</p>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
