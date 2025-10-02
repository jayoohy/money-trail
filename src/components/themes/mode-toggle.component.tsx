import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/themes/theme-provider";
import { useState } from "react";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [toggle, setToggle] = useState(true);

  const toggleTheme = () => {
    if (toggle) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    setToggle(!toggle);
  };

  return (
    <Button variant="outline" size="icon" onClick={() => toggleTheme()}>
      <Sun className="scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
