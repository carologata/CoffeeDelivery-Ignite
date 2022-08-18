import { Route, Routes } from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout";
import { Bag } from "./pages/Bag";
import { Home } from "./pages/Home";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/Sacola" element={<Bag/>}/>
      </Route>
    </Routes>
  )
}
