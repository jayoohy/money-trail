"use client";

import { useState, type FC } from "react";
import { EllipsisVertical } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "@/store/transactions/transactions.slice";
import DeleteDialog from "./delete-dialog";
import { SheetDemo } from "./sheet";
import type { Transaction } from "@/store/transactions/transactions.types";

export type DropdownMenuDialogProps = {
  t: Transaction;
};

const DropdownMenuDialog: FC<DropdownMenuDialogProps> = ({ t }) => {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [openSheet, setOpenSheet] = useState(false);
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteTransaction(t.id));
  };

  const editHandler = (e: Event) => {
    e.preventDefault();
    setOpenSheet(true);
  };

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <EllipsisVertical className="size-5" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40 bg-bg" align="end">
          <DropdownMenuGroup>
            <DropdownMenuItem onSelect={(e) => editHandler(e)}>
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setShowDeleteDialog(true)}>
              Delete
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <DeleteDialog
        open={showDeleteDialog}
        onOpenChange={setShowDeleteDialog}
        callback={deleteHandler}
      />
      <SheetDemo
        open={openSheet}
        onOpenChange={setOpenSheet}
        transactionToEdit={t}
      />
    </>
  );
};

export default DropdownMenuDialog;
