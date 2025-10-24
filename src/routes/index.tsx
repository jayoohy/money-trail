import { createBrowserRouter, Outlet } from "react-router";
import { lazy } from "react";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/themes/theme-provider";

const Dashboard = lazy(() => import("./dashboard"));
const Categories = lazy(() => import("./categories"));
const Transactions = lazy(() => import("./transactions"));
const Reports = lazy(() => import("./reports"));
const Settings = lazy(() => import("./settings"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          <Outlet />
          <Navbar />
        </ThemeProvider>
      </>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "transactions",
        element: <Transactions />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

export default router;
