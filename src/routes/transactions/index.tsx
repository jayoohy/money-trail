// import { cn } from "@/lib/utils";
// import { ChevronDown, Plus } from "lucide-react";

// const Transactions = () => {
//   return (
//     <div className="px-3 pb-30 md:px-20 lg:px-40 xl:px-50 bg-bg">
//       <div className="flex justify-center">
//         <h1 className="font-semibold text-xl pt-4 mb-6">Transactions</h1>
//         <div
//           className={cn(
//             "flex h-7 w-7 items-center justify-center mt-4 rounded-full hover:bg-green/40",
//             "bg-green/30 text-green absolute right-[7%] md:right-[15%] xl:right-[18%]"
//           )}
//         >
//           <Plus />
//         </div>
//       </div>

//       <div
//         className={cn(
//           "flex gap-4 justify-center **:first:pr-2 *:items-center",
//           "dark:*:bg-zinc-500/30 dark:*:text-white"
//         )}
//       >
//         <div className="flex bg-zinc-300 rounded-full p-2 text-gray-700 ">
//           <p>Category</p>
//           <ChevronDown className="size-5" />
//         </div>
//         <div className="flex bg-zinc-300 rounded-full p-2 text-gray-700">
//           <p>Date Range</p>
//           <ChevronDown className="size-5" />
//         </div>
//         <div className="flex bg-zinc-300 rounded-full p-2 text-gray-700">
//           <p>Type</p>
//           <ChevronDown className="size-5" />
//         </div>
//       </div>

//       <div className="*:mb-2 mt-9">
//         <p className="font-semibold text-xl">Today</p>
//         <div className="flex items-center justify-between rounded-lg py-3">
//           <div className="flex items-center gap-3">
//             <img src="/images/grocery.png" className="w-[20%] rounded-md" />
//             <div>
//               <p className="font-semibold text-[1.15rem]">Grocery Shopping</p>
//               <p className="text-sm text-gray-600">10:30 am</p>
//             </div>
//           </div>
//           <p className="font-medium text-red-500">-$50.00</p>
//         </div>
//         <div className="flex items-center justify-between rounded-lg py-3">
//           <div className="flex items-center gap-3">
//             <img src="/images/lunch.png" className="w-[20%] rounded-md" />
//             <div>
//               <p className="font-semibold text-[1.15rem]">Lunch</p>
//               <p className="text-sm text-gray-600">12:45 pm</p>
//             </div>
//           </div>
//           <p className="font-medium text-red-500">-$30.00</p>
//         </div>
//       </div>
//       <div className="*:mb-2 mt-5">
//         <p className="font-semibold text-xl">Yesterday</p>
//         <div className="flex items-center justify-between rounded-lg py-3">
//           <div className="flex items-center gap-3">
//             <img src="/images/coffee.png" className="w-[20%] rounded-md" />
//             <div>
//               <p className="font-semibold text-[1.15rem]">Coffee</p>
//               <p className="text-sm text-gray-600">9:00 am</p>
//             </div>
//           </div>
//           <p className="font-medium text-red-500">-$10.00</p>
//         </div>
//         <div className="flex items-center justify-between rounded-lg py-3">
//           <div className="flex items-center gap-3">
//             <img src="/images/salary.png" className="w-[20%] rounded-md" />
//             <div>
//               <p className="font-semibold text-[1.15rem]">Salary</p>
//               <p className="text-sm text-gray-600">2:50 pm</p>
//             </div>
//           </div>
//           <p className="font-medium text-green-600">+$2,000.00</p>
//         </div>
//       </div>

//       <div className="flex gap-6 justify-center mt-5">
//         <div className="rounded-lg bg-green/30 hover:bg-green/20 text-green py-4 px-6 font-bold">
//           Edit
//         </div>
//         <div className="rounded-lg bg-red-500/30 hover:bg-red-500/20 text-red-500 p-4 font-bold">
//           Delete
//         </div>
//       </div>
//     </div>

//   );
// };

// export default Transactions;

import {
  House,
  CarFront,
  Pizza,
  Briefcase,
  Wallet,
  Trash2,
  Edit2,
} from "lucide-react";

export default function TransactionsPreview() {
  const transactions = [
    {
      id: 1,
      date: "2025-10-10",
      description: "October Salary",
      category: "Salary",
      type: "income",
      amount: 250000,
      icon: Wallet,
    },
    {
      id: 2,
      date: "2025-10-11",
      description: "Groceries",
      category: "Food & Drink",
      type: "expense",
      amount: 18000,
      icon: Pizza,
    },
    {
      id: 3,
      date: "2025-10-12",
      description: "Apartment Rent",
      category: "Housing",
      type: "expense",
      amount: 70000,
      icon: House,
    },
    {
      id: 4,
      date: "2025-10-12",
      description: "Client Project",
      category: "Business Profit",
      type: "income",
      amount: 120000,
      icon: Briefcase,
    },
    {
      id: 5,
      date: "2025-10-13",
      description: "Fuel & Transport",
      category: "Transportation",
      type: "expense",
      amount: 12000,
      icon: CarFront,
    },
  ];

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl font-bold dark:text-white">Transactions</h1>
        <button className="bg-green text-white px-4 py-2 rounded-lg shadow hover:bg-green/80 transition">
          + Add Transaction
        </button>
      </div>

      {/* Table View (Desktop) */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-y-2">
          <thead>
            <tr className="text-gray-500 text-sm uppercase">
              <th className="text-left px-3 py-2">Date</th>
              <th className="text-left px-3 py-2">Description</th>
              <th className="text-left px-3 py-2">Category</th>
              <th className="text-left px-3 py-2">Type</th>
              <th className="text-right px-3 py-2">Amount</th>
              <th className="text-center px-3 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => {
              const Icon = t.icon;
              return (
                <tr
                  key={t.id}
                  className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition rounded-md"
                >
                  <td className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300">
                    {t.date}
                  </td>
                  <td className="px-3 py-2 font-medium flex items-center gap-2">
                    <Icon className="h-4 w-4 text-green" />
                    {t.description}
                  </td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-300">
                    {t.category}
                  </td>
                  <td className="px-3 py-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        t.type === "income"
                          ? "bg-green/20 text-green"
                          : "bg-red-200/30 text-red-500"
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
                    {t.type === "income" ? "+" : "-"}₦
                    {t.amount.toLocaleString()}
                  </td>
                  <td className="px-3 py-2 flex justify-center gap-3">
                    <button className="text-gray-500 hover:text-green transition">
                      <Edit2 size={16} />
                    </button>
                    <button className="text-gray-500 hover:text-red-500 transition">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Card View (Mobile) */}
      <div className="space-y-3 md:hidden">
        {transactions.map((t) => {
          const Icon = t.icon;
          return (
            <div
              key={t.id}
              className="p-3 rounded-lg bg-white dark:bg-gray-800 flex justify-between items-center shadow-sm"
            >
              <div className="flex items-center gap-2">
                <Icon
                  className={`h-6 w-6 ${
                    t.type === "income" ? "text-green" : "text-red-500"
                  }`}
                />
                <div>
                  <p className="font-medium">{t.description}</p>
                  <p className="text-xs text-gray-500">{t.category}</p>
                </div>
              </div>
              <p
                className={`font-semibold ${
                  t.type === "income" ? "text-green" : "text-red-500"
                }`}
              >
                {t.type === "income" ? "+" : "-"}₦{t.amount.toLocaleString()}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
