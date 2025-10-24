import type { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";

interface DeleteDialogProp {
  open?: boolean;
  onOpenChange?(open: boolean): void;
  callback: () => void;
  trigger?: ReactNode;
}

const DeleteDialog = ({
  open,
  onOpenChange,
  callback,
  trigger,
}: DeleteDialogProp) => {
  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        {trigger}
        <DialogContent className="dark:bg-bg">
          <DialogHeader>
            <DialogTitle className="text-center">
              Delete Transaction?
            </DialogTitle>
            <DialogDescription className="text-center">
              Confirm that you want to delete this transaction
            </DialogDescription>
          </DialogHeader>
          <Button
            className="max-w-2xl mx-auto bg-red-500/30 hover:bg-red-500/20 text-red-500"
            onClick={() => callback()}
          >
            Delete
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DeleteDialog;
