import { ShoppingCart } from "lucide-react";

const Recent = () => {
  return (
    <div className="mt-6">
      <p className="font-semibold text-[1.2rem] pb-2">Recent Transactions</p>
      <div className="*:mb-2">
        <div className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#53d22d]/30 text-[#53d22d]">
              <ShoppingCart />
            </div>
            <div>
              <p className="font-medium ">Groceries</p>
              <p className="text-sm text-gray-600">Today</p>
            </div>
          </div>
          <p className="font-medium text-red-500">-$50.00</p>
        </div>
        <div className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#53d22d]/30 text-[#53d22d]">
              <ShoppingCart />
            </div>
            <div>
              <p className="font-medium ">Groceries</p>
              <p className="text-sm text-gray-600">Today</p>
            </div>
          </div>
          <p className="font-medium text-red-500">-$50.00</p>
        </div>
        <div className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#53d22d]/30 text-[#53d22d]">
              <ShoppingCart />
            </div>
            <div>
              <p className="font-medium ">Groceries</p>
              <p className="text-sm text-gray-600">Today</p>
            </div>
          </div>
          <p className="font-medium text-red-500">-$50.00</p>
        </div>
        <div className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#53d22d]/30 text-[#53d22d]">
              <ShoppingCart />
            </div>
            <div>
              <p className="font-medium ">Salary</p>
              <p className="text-sm text-gray-600">5 days ago</p>
            </div>
          </div>
          <p className="font-medium text-green-600">+$500.00</p>
        </div>
      </div>
    </div>
  );
};

export default Recent;
