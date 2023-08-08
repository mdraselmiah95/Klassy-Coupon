import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Link,
} from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";

const Menu = () => {
  return (
    <Navbar className="max-w-[1280px] px-5 mx-auto">
      <NavbarBrand>
        <NavLink to="/">
          <img
            src="https://klassy.com.bd/public/uploads/settings/general/lrChtKFxC6of10DxZNezmW2eFIejECHWnZglkIHG.png"
            alt=""
          />
        </NavLink>
      </NavbarBrand>
      <NavbarContent className="hidden gap-10 sm:flex" justify="center">
        <NavbarItem>
          <NavLink
            to="/coupon"
            style={({ isActive }) => {
              return {
                color: isActive ? "#d3066d" : "",
              };
            }}
          >
            Coupons
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to="/users"
            style={({ isActive }) => {
              return {
                color: isActive ? "#d3066d" : "",
              };
            }}
          >
            Users
          </NavLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button className="bg-white" endContent={<FaUserCircle size={20} />}>
            <b>SIGN IN</b>
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            className="bg-white"
            endContent={<FaShoppingCart size={20} />}
          >
            <b>MY CART</b>
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Menu;
