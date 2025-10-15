import { cn } from "@/lib/utils";
import { selectCategories } from "@/store/categories/categories.selector";
import {
  BriefcaseBusiness,
  CarFront,
  Gift,
  House,
  Pill,
  Pizza,
  Plus,
  ShoppingBag,
  Tv,
  Wallet,
} from "lucide-react";
import { useSelector } from "react-redux";

const categoryIcons: Record<string, React.ElementType> = {
  Shopping: ShoppingBag,
  Housing: House,
  Transportation: CarFront,
  "Food & Drink": Pizza,
  Entertainment: Tv,
  Health: Pill,
  Salary: BriefcaseBusiness,
  "Business Profit": Wallet,
  Bonus: Gift,
};

const Categories = () => {
  const categories = useSelector(selectCategories);

  const expenses = categories?.filter(
    (category) => category.type === "expense"
  );
  const income = categories?.filter((category) => category.type === "income");
  console.log(expenses, income);

  return (
    <div className="bg-bg px-3 pb-30 h-[100vh]">
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
          {expenses?.map((category) => {
            const Icon = categoryIcons[category.name] || Wallet;
            return (
              <div className="p-3 rounded-md *:first:mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green/30 text-green">
                  <Icon />
                </div>
                <p className="font-semibold">{category.name}</p>
              </div>
            );
          })}
        </div>
        <p className="font-semibold text-xl mt-8 mb-3">Income</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 *:flex *:items-center *:flex-col *:bg-green/10">
          {income?.map((category) => {
            const Icon = categoryIcons[category.name] || Wallet;
            return (
              <div className="p-3 rounded-md *:first:mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green/30 text-green">
                  <Icon />
                </div>
                <p className="font-semibold">{category.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
