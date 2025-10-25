import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from "@/components/ui/select";
import { selectCategories } from "@/store/categories/categories.selector";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import { useSelector } from "react-redux";

interface SelectScrollableProps {
  trigger: ReactNode;
  onChange: Dispatch<SetStateAction<string>>;
  value: string;
}

export function SelectScrollable({
  trigger,
  value,
  onChange,
}: SelectScrollableProps) {
  const categories = useSelector(selectCategories);

  const expenses = categories?.filter(
    (category) => category.type === "expense"
  );
  const income = categories?.filter((category) => category.type === "income");

  return (
    <Select value={value} onValueChange={onChange}>
      {trigger}
      <SelectContent className="dark:bg-bg">
        <SelectGroup>
          <SelectLabel>Income</SelectLabel>
          {income?.map((i) => (
            <SelectItem key={i.id} value={i.name}>
              {i.name}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Expense</SelectLabel>
          {expenses?.map((e) => (
            <SelectItem value={e.name}>{e.name}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
