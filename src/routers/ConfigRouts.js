import { useSelector } from "react-redux";
import { Navigate, useRoutes } from "react-router-dom";

// pages
import { AddInvoices, EditeInvoices, Invoices, Login, ViewInvoices, NotFound } from "../pages";

const loginRout = [
  {
    path: "/login",
    element: <Login />

  },
]

export const ConfigRouts = () => {
  const { user } = useSelector(item => item.user);

  const routs = [
    {
      path: "/",
      element: <Invoices />
    },
    {
      path: "/view/:id",
      children: [
        {
          path: "",
          element: <ViewInvoices />
        },
        {
          path: "edite",
          element: user ? <EditeInvoices /> : <Navigate to={"/login"} />,
        },
      ]
    },
    {
      path: "/add",
      element: user ? <AddInvoices /> : <Navigate to={"/login"} />,
    },

    {
      path: "*",
      element: <NotFound />
    }
  ]

  const elements = useRoutes([...(!user ? loginRout : []), ...routs]);
  return elements;
}