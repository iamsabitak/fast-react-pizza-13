import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigate, useNavigation } from "react-router-dom";

function AppLayout() {
  const navigation = useNavigation();
  console.log(navigator);
  const isLoading = navigation.state === "loading";
  return (
    <div className="layout">
      <Header />
      <main>
        <h1>Content</h1>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
