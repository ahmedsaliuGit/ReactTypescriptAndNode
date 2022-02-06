import IRoute from "../interfaces/route";
import HomePage from "../pages/home";
import AboutPage from "../pages/about";

const routes: IRoute[] = [
  {
    path: "/",
    component: HomePage,
    name: "Home Page",
    exact: true,
  },
  {
    path: "/about",
    component: AboutPage,
    name: "About Page",
    exact: true,
  },
  {
    path: "/about/:number",
    component: AboutPage,
    name: "About Page",
    exact: true,
  },
];

export default routes;
