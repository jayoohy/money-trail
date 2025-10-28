import Navbar from "@/components/navbar";
import { useTheme } from "@/components/themes/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Outlet } from "react-router";

function AppLayout() {
  const { theme } = useTheme();

  return (
    <>
      <Outlet />
      <Toaster
        position="top-center"
        theme={theme === "system" ? undefined : theme}
      />
      <Navbar />
    </>
  );
}

export default AppLayout;
