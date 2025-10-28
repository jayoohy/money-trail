import { RouterProvider } from "react-router";
import router from "./routes";
import PWAInstallPrompt from "./components/install-prompt";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <PWAInstallPrompt />
    </>
  );
}

export default App;
