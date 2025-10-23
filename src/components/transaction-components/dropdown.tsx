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
      <DeleteDialog
        open={showDeleteDialog}
        onOpenChange={setShowDeleteDialog}
        callback={deleteHandler}
      />
    </>
  );
};

export default DropdownMenuDialog;
