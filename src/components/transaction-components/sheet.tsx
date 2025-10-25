"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState, type ChangeEvent, type ReactNode } from "react";
import { Input } from "../ui/input";
import { SelectScrollable } from "./select";
import { SelectTrigger, SelectValue } from "../ui/select";
import { cn } from "@/lib/utils";
import { Textarea } from "../ui/textarea";
import type { Transaction } from "@/store/transactions/transactions.types";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import {
  addTransaction,
  updateTransactions,
} from "@/store/transactions/transactions.slice";
import { toast } from "sonner";

interface SheetDemoProps {
  trigger?: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  transactionToEdit?: Transaction;
}

export function SheetDemo({
  trigger,
  open,
  onOpenChange,
  transactionToEdit,
}: SheetDemoProps) {
  const [desc, setDesc] = useState(
    transactionToEdit ? transactionToEdit.desc : ""
  );
  const [amount, setAmount] = useState(
    transactionToEdit ? transactionToEdit.amount : 0
  );
  const [category, setCategory] = useState(
    transactionToEdit ? transactionToEdit.category : ""
  );
  const [activeButton, setActiveButton] = useState(
    transactionToEdit ? transactionToEdit.type : ""
  );
  const dispatch = useDispatch();

  const addIncome = () => setActiveButton("income");
  const addExpense = () => setActiveButton("expense");

  const onDescChangehandler = (
    event: ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const text = event.target.value;
    setDesc(text);
  };

  const amountHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    const number = event.target.value;
    setAmount(+number);
  };

  const saveTransaction = () => {
    if (!amount || !category || !activeButton || !desc.trim()) {
      toast.error("Please fill in all fields before saving.");
      return;
    }

    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    const transaction: Transaction = {
      id: uuidv4(),
      date,
      time,
      desc,
      category,
      type: activeButton,
      amount,
    };

    dispatch(addTransaction(transaction));
    setActiveButton("");
    setCategory("");
    setDesc("");
    setAmount(0);
    onOpenChange?.(false);
  };

  const updateTransactionHandler = () => {
    if (transactionToEdit) {
      const transaction: Transaction = {
        id: transactionToEdit.id,
        date: transactionToEdit.date,
        time: transactionToEdit.time,
        desc,
        category,
        type: activeButton,
        amount,
      };
      dispatch(updateTransactions(transaction));
      onOpenChange?.(false);
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      {trigger}
      <SheetContent className="bg-bg w-full">
        <SheetHeader>
          <SheetTitle className="text-center">New Transaction</SheetTitle>
        </SheetHeader>
        <div className="flex items-center pl-5">
          <div className="text-green text-4xl">$</div>
          <Input
            type="number"
            className="h-35 border-0 text-center focus-visible:ring-0 !bg-bg text-5xl md:text-5xl shadow-none"
            placeholder="1000.00"
            onChange={amountHandler}
            value={amount}
            required
          />
        </div>
        <div
          className={cn(
            "flex justify-center *:w-[40%] space-x-3 *:bg-green/30",
            "*:hover:bg-green/50 *:dark:bg-green/10 *:dark:hover:bg-green/20"
          )}
        >
          <Button
            variant={null}
            className={
              activeButton == "income" ? "!bg-green/50 !dark:bg-green/20" : ""
            }
            onClick={addIncome}
          >
            Income
          </Button>
          <Button
            variant={null}
            className={
              activeButton == "expense" ? "!bg-green/50 !dark:bg-green/20" : ""
            }
            onClick={addExpense}
          >
            Expense
          </Button>
        </div>
        <SelectScrollable
          value={category}
          onChange={setCategory}
          trigger={
            <SelectTrigger className="w-[85%] py-7 mt-5 mx-auto bg-green/30 dark:bg-green/10 dark:hover:bg-green/10">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
          }
        />
        <Textarea
          placeholder="Description"
          className={cn(
            "w-[85%] py-7 mt-5 mx-auto bg-green/30 dark:bg-green/10",
            "dark:hover:bg-green/10 border-0 focus-visible:ring-0"
          )}
          onChange={onDescChangehandler}
          value={desc}
        />
        <SheetFooter>
          <Button
            type="submit"
            className="bg-green dark:bg-green/30 dark:text-white hover:bg-green/80"
            onClick={
              transactionToEdit ? updateTransactionHandler : saveTransaction
            }
          >
            Save
          </Button>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
