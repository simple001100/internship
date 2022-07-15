import Market from "./pages/Market";
import Cart from "./pages/Cart";
import CategoryPage from "./pages/CategoryPage";
import ItemPage from "./pages/ItemPage";
import Authentication from "./pages/Authentication";
import {
  CART_ROUTE,
  PHONES_ROUTE,
  LAPTOPS_ROUTE,
  WATCHES_ROUTE,
  VIDEOCARDS_ROUTE,
  PROCESSORS_ROUTE,
  SSDS_ROUTE,
  LOGIN_ROUTE,
  MARKET_ROUTE,
  PRODUCT_ROUTE,
  REGISTRATION_ROUTE,
} from "./utils/consts";

export const authRoutes = [
  { path: MARKET_ROUTE, Component: Market },
  { path: PHONES_ROUTE, Component: CategoryPage },
  { path: LAPTOPS_ROUTE, Component: CategoryPage },
  { path: WATCHES_ROUTE, Component: CategoryPage },
  { path: VIDEOCARDS_ROUTE, Component: CategoryPage },
  { path: PROCESSORS_ROUTE, Component: CategoryPage },
  { path: SSDS_ROUTE, Component: CategoryPage },
  { path: PRODUCT_ROUTE + "/:id", Component: ItemPage },
  { path: CART_ROUTE, Component: Cart },
];

export const publicRoutes = [
  { path: LOGIN_ROUTE, Component: Authentication },
  { path: REGISTRATION_ROUTE, Component: Authentication },
  { path: PHONES_ROUTE, Component: CategoryPage },
  { path: LAPTOPS_ROUTE, Component: CategoryPage },
  { path: WATCHES_ROUTE, Component: CategoryPage },
  { path: VIDEOCARDS_ROUTE, Component: CategoryPage },
  { path: PROCESSORS_ROUTE, Component: CategoryPage },
  { path: SSDS_ROUTE, Component: CategoryPage },
  { path: MARKET_ROUTE, Component: Market },
  { path: PRODUCT_ROUTE + "/:id", Component: ItemPage },
];
