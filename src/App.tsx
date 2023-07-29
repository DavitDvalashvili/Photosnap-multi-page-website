import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from "./Root";
import HomePage from "./components/Pages/HomePage";
import StoriesPage from "./components/Pages/StoriesPage";
import FeaturesPage from "./components/Pages/FeaturesPage";
import PricingPage from "./components/Pages/PricingPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="stories" element={<StoriesPage />} />
      <Route path="features" element={<FeaturesPage />} />
      <Route path="pricing" element={<PricingPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
