import { cn } from "@/lib/utils";
import { LayoutDashboard, ScrollText, Settings, Shapes } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
      <div
        className={cn(
          "flex justify-between fixed bottom-0 right-0 left-0 bg-[#f6f8f6]",
          "border-t-1 border-gray-600! p-5 text-gray-600",
          "md:right-[25%] md:left-[25%] md:border-2 md:mb-5 md:rounded-lg md:py-3",
          "lg:right-[34%] lg:left-[34%] xl:justify-around",
          "*:hover:text-primary"
        )}
      >
        <Link to="/" className="flex flex-col items-center">
          <LayoutDashboard className="size-7" />
          <p className="text-sm pt-1">Dashboard</p>
        </Link>
        <Link to="/transactions" className="flex flex-col items-center">
          <ScrollText className="size-7" />
          <p className="text-sm pt-1">Transactions</p>
        </Link>
        <Link to="/categories" className="flex flex-col items-center">
          <Shapes className="size-7" />
          <p className="text-sm pt-1">Categories</p>
        </Link>
        <Link to="/settings" className="flex flex-col items-center">
          <Settings className="size-7" />
          <p className="text-sm pt-1">Settings</p>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
