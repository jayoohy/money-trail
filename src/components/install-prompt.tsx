import { Button } from "@/components/ui/button";
import { usePWAInstallPrompt } from "@/hooks/use-pwa";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Share } from "lucide-react";

export default function PWAInstallPrompt() {
  const { canInstall, promptInstall, isIos, isInStandaloneMode } =
    usePWAInstallPrompt();
  const [open, setOpen] = useState(true); // Show dialog on load if install possible

  if (isIos && !isInStandaloneMode) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add to Home Screen</DialogTitle>
            <DialogDescription className="inline-flex items-center justify-center flex-wrap gap-1 text-center">
              On iOS Safari, tap the <Share size={16} />
              icon, then choose <strong>Add to Home Screen</strong>.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setOpen(false)}>Got it</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  if (canInstall) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Install {import.meta.env.VITE_APP_NAME || "this app"}
            </DialogTitle>
            <DialogDescription>
              Add this app to your device for quick access — works offline too.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Later
            </Button>
            <Button
              onClick={async () => {
                await promptInstall();
                setOpen(false);
              }}
            >
              Install
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return null;
}
