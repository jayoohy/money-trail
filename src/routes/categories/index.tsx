import { selectCategories } from "@/store/categories/categories.selector";
import {
  BriefcaseBusiness,
  Laptop,
  Wallet,
  LineChart,
  PiggyBank,
  Gift,
  RotateCcw,
  CircleDollarSign,
  Home,
  Lightbulb,
  CarFront,
  Utensils,
  Pizza,
  ShoppingBag,
  Tv,
  Pill,
  Dumbbell,
  GraduationCap,
  Users,
  Landmark,
  ShieldCheck,
  PiggyBank as SavingsIcon,
  MoreHorizontal,
} from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const categoryIcons: Record<string, React.ElementType> = {
  // Income
  "Salary / Wages": BriefcaseBusiness,
  "Freelance / Side Hustle": Laptop,
  "Business Income": Wallet,
  "Investments / Dividends": LineChart,
  "Interest / Savings Returns": PiggyBank,
  "Gifts / Donations Received": Gift,
  "Refunds / Reimbursements": RotateCcw,
  "Other Income": CircleDollarSign,

  // Expense
  "Housing / Rent": Home,
  "Utilities (Electricity, Water, Internet)": Lightbulb,
  Transportation: CarFront,
  "Food & Groceries": Utensils,
  "Dining Out / Takeout": Pizza,
  "Clothing & Shopping": ShoppingBag,
  "Entertainment / Subscriptions": Tv,
  "Health & Medical": Pill,
  "Fitness / Gym": Dumbbell,
  "Education / Courses": GraduationCap,
  "Childcare / Family Support": Users,
  "Loan / Debt Payment": Landmark,
  Insurance: ShieldCheck,
  "Savings Deposit": SavingsIcon,
  "Miscellaneous / Other": MoreHorizontal,
};

const Categories = () => {
  const categories = useSelector(selectCategories);

  const expenses = categories?.filter(
    (category) => category.type === "expense"
  );
  const income = categories?.filter((category) => category.type === "income");

  return (
    <div className="px-3 pb-35">
      <div className="flex justify-center">
        <h1 className="font-semibold text-xl pt-4 mb-6">Categories</h1>
      </div>
      <div className="lg:mx-20 xl:mx-30">
        <p className="font-semibold text-xl mb-3">Expenses</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 *:flex *:items-center *:flex-col *:bg-green/10">
          {expenses?.map((category) => {
            const Icon = categoryIcons[category.name] || Wallet;
            const name = category.name
              .split(" ")[0]
              .replace(/[^a-zA-Z0-9]/g, "")
              .toLowerCase();
            return (
              <Link
                to={`/categories/${name}`}
                className="p-3 rounded-md *:first:mb-2"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green/30 text-green">
                  <Icon />
                </div>
                <p className="font-semibold text-center">{category.name}</p>
              </Link>
            );
          })}
        </div>
        <p className="font-semibold text-xl mt-8 mb-3">Income</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 *:flex *:items-center *:flex-col *:bg-green/10">
          {income?.map((category) => {
            const Icon = categoryIcons[category.name] || Wallet;
            const name = category.name
              .split(" ")[0]
              .replace(/[^a-zA-Z0-9]/g, "")
              .toLowerCase();
            return (
              <Link
                to={`/categories/${name}`}
                className="p-3 rounded-md *:first:mb-2"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green/30 text-green">
                  <Icon />
                </div>
                <p className="font-semibold text-center">{category.name}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
