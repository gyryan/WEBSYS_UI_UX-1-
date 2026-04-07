import { createBrowserRouter } from "react-router";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import Events from "./components/Events";
import Registration from "./components/Registration";
import Grades from "./components/Grades";
import RequestDocument from "./components/RequestDocument";
import Transactions from "./components/Transactions";
import Account from "./components/Account";
import RouteError from "./components/RouteError";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    ErrorBoundary: RouteError,
  },
  {
    path: "/login",
    Component: Login,
    ErrorBoundary: RouteError,
  },
  {
    path: "/signup",
    Component: SignUp,
    ErrorBoundary: RouteError,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
    ErrorBoundary: RouteError,
  },
  {
    path: "/dashboard/events",
    Component: Events,
    ErrorBoundary: RouteError,
  },
  {
    path: "/dashboard/registration",
    Component: Registration,
    ErrorBoundary: RouteError,
  },
  {
    path: "/dashboard/grades",
    Component: Grades,
    ErrorBoundary: RouteError,
  },
  {
    path: "/dashboard/request-document",
    Component: RequestDocument,
    ErrorBoundary: RouteError,
  },
  {
    path: "/dashboard/transactions",
    Component: Transactions,
    ErrorBoundary: RouteError,
  },
  {
    path: "/dashboard/account",
    Component: Account,
    ErrorBoundary: RouteError,
  },
]);