import { ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const transactions = [
  {
    id: 1,
    title: "Groceries",
    date: "Today",
    amount: "-$50.00",
    type: "expense",
    icon: ShoppingCart,
  },
  {
    id: 2,
    title: "Groceries",
    date: "Yesterday",
    amount: "-$50.00",
    type: "expense",
    icon: ShoppingCart,
  },
  {
    id: 3,
    title: "Groceries",
    date: "3 days ago",
    amount: "-$50.00",
    type: "expense",
    icon: ShoppingCart,
  },
  {
    id: 4,
    title: "Salary",
    date: "5 days ago",
    amount: "+$500.00",
    type: "income",
    icon: ShoppingCart,
  },
];

const Recent = () => {
  return (
    <section className="mt-6">
      <h2 className="font-semibold text-lg pb-2 text-foreground">
        Recent Transactions
      </h2>

      <div className="space-y-2">
        {transactions.map(({ id, title, date, amount, type, icon: Icon }) => (
          <Card key={id} className="shadow-sm dark:bg-green/10 py-4">
            <CardContent className="flex items-center justify-between px-3">
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full 
                  ${
                    type === "income"
                      ? "bg-green/30 text-green"
                      : "bg-destructive/10 text-destructive"
                  }`}
                >
                  <Icon size={18} />
                </div>
                <div>
                  <p className="font-medium text-foreground">{title}</p>
                  <p className="text-sm text-muted-foreground">{date}</p>
                </div>
              </div>
              <p
                className={`font-medium ${
                  type === "income"
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-500"
                }`}
              >
                {amount}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Recent;
