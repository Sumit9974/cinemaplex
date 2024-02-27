import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import FoodItem from "./Pages/FoodItem/FoodItem";
import Home from "./Pages/Home/Home";
import SignIn from "./Pages/SignIn/SignIn";
import AddCategory from "./Components/AddCategory/AddCategory";
import OrderDetails from "./Pages/OrderDetails/OrderDetails";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./Pages/RootLayout/RootLayout";

function App() {
  const [userLogin, setUserLogin] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      id: "root",

      children: [
        { index: true, element: <Home /> },
        { path: "fooditem", element: <FoodItem /> },
        { path: "category", element: <AddCategory /> },
        { path: "order-details", element: <OrderDetails /> },
      ],
    },
    {
      path: "/signIn",
      element: <SignIn />,
    },
  ]);
  return <RouterProvider router={router} />;
}

// return userLogin ? (
//   <div>
//   <Header userLogin={setUserLogin} />
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/fooditem" element={<FoodItem />} />
//       <Route path="/signin" element={<SignIn />} />
//       <Route path="/category" element={<AddCategory/>} />
//       <Route path="/order-details" element={<OrderDetails/>} />
//     </Routes>
//   </div>
// ) : (
//   <SignIn userLogin={setUserLogin} />
// );

export default App;
