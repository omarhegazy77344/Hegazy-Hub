import LayoutRoute from "./LayoutRoute";
import HomeScreen from "./HomeScreen";
import RegistrationScreen from "./RegistrationScreen";
import LoginScreen from "./LoginScreen";
import { BrowserRouter, Switch } from "react-router-dom";
import AddProductScreen from "./AddProductScreen";
import GuestLayoutRoute from './GuestLayoutRoute';
import PrivateLayoutRoute from './PrivateLayoutRoute';
import ProfileScreen from './ProfileScreen';
import ProductsScreen from "./ProductsScreen";
import UpdateProduct from "./UdateProduct";
import Cart from "./Cart";
import Checkout from "./Checkout";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <LayoutRoute path="/" exact={true} component={HomeScreen} />
        <PrivateLayoutRoute path="/profile" exact={true} component={ProfileScreen} />
        <GuestLayoutRoute path="/register" exact={true} component={RegistrationScreen} />
        <GuestLayoutRoute path="/login" exact={true} component={LoginScreen} />
        <PrivateLayoutRoute path="/sell" exact={true} component={AddProductScreen} />
        <LayoutRoute path="/buy" exact={true} component={ProductsScreen} />
        <PrivateLayoutRoute path="/pupdate" exact={true} component={UpdateProduct} />
        <PrivateLayoutRoute path="/cart" exact={true} component={Cart} />
        <PrivateLayoutRoute path="/checkout" exact={true} component={Checkout} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;