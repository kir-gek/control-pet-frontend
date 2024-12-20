import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { MyOrders } from "./components/MyOrders/MyOrders";
import { Counting } from "./components/Counting";
import { History } from "./components/History";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/myOrders" element={<MyOrders />} />
        <Route path="/counting" element={<Counting />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
