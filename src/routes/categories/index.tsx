import { cn } from "@/lib/utils";
import {
  Banknote,
  BriefcaseBusiness,
  CarFront,
  Gift,
  Handshake,
  House,
  Pill,
  Pizza,
  Plus,
  ShoppingBag,
  Tv,
} from "lucide-react";

const Categories = () => {
  return (
    <div className="bg-bg px-3 pb-30">
      <div className="flex justify-center">
        <h1 className="font-semibold text-xl pt-4 mb-6">Categories</h1>
        <div
          className={cn(
            "flex h-7 w-7 items-center justify-center mt-4 rounded-full hover:bg-green/40",
            "bg-green/30 text-green absolute right-[7%] lg:right-[10%] xl:right-[15%]"
          )}
        >
          <Plus />
        </div>
      </div>
      <div className="lg:mx-20 xl:mx-30">
        <p className="font-semibold text-xl mb-3">Expenses</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 *:flex *:items-center *:flex-col *:bg-green/10">
          <div className="p-3 rounded-md *:first:mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green/30 text-green">
              <ShoppingBag />
            </div>
            <p className="font-semibold">Shopping</p>
          </div>
          <div className="p-3 rounded-md *:first:mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green/30 text-green">
              <House />
            </div>
            <p className="font-semibold">Housing</p>
          </div>
          <div className="p-3 rounded-md *:first:mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green/30 text-green">
              <CarFront />
            </div>
            <p className="font-semibold">Transportation</p>
          </div>
          <div className="p-3 rounded-md *:first:mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green/30 text-green">
              <Pizza />
            </div>
            <p className="font-semibold">Food & Drink</p>
          </div>
          <div className="p-3 rounded-md *:first:mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green/30 text-green">
              <Tv />
            </div>
            <p className="font-semibold">Entertainment</p>
          </div>
          <div className="p-3 rounded-md *:first:mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green/30 text-green">
              <Pill />
            </div>
            <p className="font-semibold">Health</p>
          </div>
        </div>
        <p className="font-semibold text-xl mt-8 mb-3">Income</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 *:flex *:items-center *:flex-col *:bg-green/10">
          <div className="p-3 rounded-md *:first:mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green/30 text-green">
              <BriefcaseBusiness />
            </div>
            <p className="font-semibold">Salary</p>
          </div>
          <div className="p-3 rounded-md *:first:mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green/30 text-green">
              <Gift />
            </div>
            <p className="font-semibold">Bonus</p>
          </div>
          <div className="p-3 rounded-md *:first:mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green/30 text-green">
              <Handshake />
            </div>
            <p className="font-semibold">Business</p>
          </div>
          <div className="p-3 rounded-md *:first:mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green/30 text-green">
              <Banknote />
            </div>
            <p className="font-semibold">Other</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
