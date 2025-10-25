import { createBrowserRouter } from "react-router";
import { lazy } from "react";
import { ThemeProvider } from "@/components/themes/theme-provider";
import AppLayout from "@/layout";
import CategoryPage from "./category";

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
          <AppLayout />
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
        path: "categories/:category",
        element: <CategoryPage />,
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
