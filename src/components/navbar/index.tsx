import { cn } from "@/lib/utils";
import { LayoutDashboard, ScrollText, Settings, Shapes } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <div
        className={cn("flex fixed bottom-0 right-0 left-0 bg-primary-custom")}
      >
        <div>
          <LayoutDashboard />
          <p>Dashboard</p>
        </div>
        <div>
          <ScrollText />
          <p>Transactions</p>
        </div>
        <div>
          <Shapes />
          <p>Categories</p>
        </div>
        <div>
          <Settings />
          <p>Settings</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
