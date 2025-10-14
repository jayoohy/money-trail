import { cn } from "@/lib/utils";
import { ChevronDown, Plus } from "lucide-react";

const Transactions = () => {
  return (
    <div className="px-3 pb-30 md:px-20 lg:px-40 xl:px-50 bg-bg">
      <div className="flex justify-center">
        <h1 className="font-semibold text-xl pt-4 mb-6">Transactions</h1>
        <div
          className={cn(
            "flex h-7 w-7 items-center justify-center mt-4 rounded-full hover:bg-green/40",
            "bg-green/30 text-green absolute right-[7%] md:right-[15%] xl:right-[18%]"
          )}
        >
          <Plus />
        </div>
      </div>

      <div
        className={cn(
          "flex gap-4 justify-center **:first:pr-2 *:items-center",
          "dark:*:bg-zinc-500/30 dark:*:text-white"
        )}
      >
        <div className="flex bg-zinc-300 rounded-full p-2 text-gray-700 ">
          <p>Category</p>
          <ChevronDown className="size-5" />
        </div>
        <div className="flex bg-zinc-300 rounded-full p-2 text-gray-700">
          <p>Date Range</p>
          <ChevronDown className="size-5" />
        </div>
        <div className="flex bg-zinc-300 rounded-full p-2 text-gray-700">
          <p>Type</p>
          <ChevronDown className="size-5" />
        </div>
      </div>

      <div className="*:mb-2 mt-9">
        <p className="font-semibold text-xl">Today</p>
        <div className="flex items-center justify-between rounded-lg py-3">
          <div className="flex items-center gap-3">
            <img src="/images/grocery.png" className="w-[20%] rounded-md" />
            <div>
              <p className="font-semibold text-[1.15rem]">Grocery Shopping</p>
              <p className="text-sm text-gray-600">10:30 am</p>
            </div>
          </div>
          <p className="font-medium text-red-500">-$50.00</p>
        </div>
        <div className="flex items-center justify-between rounded-lg py-3">
          <div className="flex items-center gap-3">
            <img src="/images/lunch.png" className="w-[20%] rounded-md" />
            <div>
              <p className="font-semibold text-[1.15rem]">Lunch</p>
              <p className="text-sm text-gray-600">12:45 pm</p>
            </div>
          </div>
          <p className="font-medium text-red-500">-$30.00</p>
        </div>
      </div>
      <div className="*:mb-2 mt-5">
        <p className="font-semibold text-xl">Yesterday</p>
        <div className="flex items-center justify-between rounded-lg py-3">
          <div className="flex items-center gap-3">
            <img src="/images/coffee.png" className="w-[20%] rounded-md" />
            <div>
              <p className="font-semibold text-[1.15rem]">Coffee</p>
              <p className="text-sm text-gray-600">9:00 am</p>
            </div>
          </div>
          <p className="font-medium text-red-500">-$10.00</p>
        </div>
        <div className="flex items-center justify-between rounded-lg py-3">
          <div className="flex items-center gap-3">
            <img src="/images/salary.png" className="w-[20%] rounded-md" />
            <div>
              <p className="font-semibold text-[1.15rem]">Salary</p>
              <p className="text-sm text-gray-600">2:50 pm</p>
            </div>
          </div>
          <p className="font-medium text-green-600">+$2,000.00</p>
        </div>
      </div>

      <div className="flex gap-6 justify-center mt-5">
        <div className="rounded-lg bg-green/30 hover:bg-green/20 text-green py-4 px-6 font-bold">
          Edit
        </div>
        <div className="rounded-lg bg-red-500/30 hover:bg-red-500/20 text-red-500 p-4 font-bold">
          Delete
        </div>
      </div>
    </div>
  );
};

export default Transactions;
