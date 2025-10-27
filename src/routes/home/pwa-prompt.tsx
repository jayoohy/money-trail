import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      const evt = e as BeforeInstallPromptEvent;
      e.preventDefault();
      setDeferredPrompt(evt);
      setShowPrompt(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleDismiss = () => {
    setShowPrompt(false);
    sessionStorage.setItem("installPromptDismissed", "true");
  };

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      console.log("✅ Money Trail installed successfully!");
    } else {
      console.log("❌ User dismissed installation prompt.");
    }

    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  if (!showPrompt) return null;

  return (
    <div
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 bg-white/90 dark:bg-green-950/90 backdrop-blur-md 
                 text-gray-800 dark:text-gray-100 px-5 py-4 rounded-xl shadow-lg flex items-center 
                 gap-3 border border-green-200 dark:border-green-900 animate-fade-in"
    >
      <p className="text-sm font-medium">Install Money Trail?</p>
      <Button
        onClick={handleInstall}
        className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 text-sm rounded-lg"
      >
        Install
      </Button>
      <Button
        onClick={handleDismiss}
        variant="outline"
        className="border-gray-300 dark:border-green-700 text-sm"
      >
        Not now
      </Button>
    </div>
  );
}
