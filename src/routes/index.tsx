import { createBrowserRouter } from "react-router";
import { ThemeProvider } from "@components/themes/theme-provider";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          {/* <Suspense fallback={<Preloader />}> */}
            {/* <ScrollToTop /> */}
            {/* <Pagelayout /> */}
          {/* </Suspense> */}
        </ThemeProvider>
      </>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default router;
