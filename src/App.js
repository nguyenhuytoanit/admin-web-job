import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import "./App.css";

function App() {
  const routing = useRoutes(routes);
  return <Suspense fallback={<div>Loading...</div>}>{routing}</Suspense>;
}

export default App;
