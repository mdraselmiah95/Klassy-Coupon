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
        <img
          src="https://klassy.com.bd/public/uploads/settings/general/lrChtKFxC6of10DxZNezmW2eFIejECHWnZglkIHG.png"
          alt=""
        />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        <NavbarItem>
          <NavLink
            to="/"
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
