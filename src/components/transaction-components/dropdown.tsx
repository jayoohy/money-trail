"use client";

import { useState, type FC } from "react";
import { EllipsisVertical } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "@/store/transactions/transactions.slice";

export type DropdownMenuDialogProps = {
  id: string;
};

const DropdownMenuDialog: FC<DropdownMenuDialogProps> = ({ id }) => {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteTransaction(id));
  };

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <EllipsisVertical className="size-5" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40 bg-bg" align="end">
          <DropdownMenuGroup>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setShowDeleteDialog(true)}>
              Delete
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent className="dark:bg-bg">
          <DialogHeader>
            <DialogTitle className="text-center">
              Delete Transaction?
            </DialogTitle>
            <DialogDescription className="text-center">
              Confirm that you want to delete this transaction
            </DialogDescription>
          </DialogHeader>
          <button
            className="rounded-lg text-center mx-[40%] bg-red-500/30 hover:bg-red-500/20 text-red-500 p-1"
            onClick={() => deleteHandler()}
          >
            Delete
          </button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DropdownMenuDialog;
