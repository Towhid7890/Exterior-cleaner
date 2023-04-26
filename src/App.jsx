import { router } from "./layout/Routes";
import { RouterProvider } from "react-router-dom";
import "react-day-picker/dist/style.css";
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
