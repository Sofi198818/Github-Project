import Dashboard from "../pages/Dashboard";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import ROUTES from "../constants/routes";
import GuestGuard from "../components/GuestGuard";
import AuthGuard from "../components/AuthGuard";

export default [
  {
    path: ROUTES.PAGE_SIGN_IN,
    exact: true,
    page: SignIn,
    guard: GuestGuard,
  },
  {
    path: ROUTES.PAGE_SIGN_UP,
    exact: false,
    page: SignUp,
    guard: GuestGuard,
  },
  {
    path: ROUTES.PAGE_DASHBOARD,
    exact: false,
    page: Dashboard,
    guard: AuthGuard,
  },
];
