import React, { useState } from "react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";
import ReactModal from "react-modal";
import SideBarMenus from "./sidebar/SidebarMenus";

const Nav = () => {
  const { width } = useWindowDimensions();
  const [showMenu, setShowMenu] = useState(false);
  const getMobileMenu = () => {
    if (width <= 768) {
      return (
        <FontAwesomeIcon
          onClick={onClickToggle}
          icon={faBars}
          size="lg"
          className="nav-mobile-menu"
        />
      );
    }
    return null;
  };

  const onClickToggle = (e: React.MouseEvent<Element, MouseEvent>) => {
    setShowMenu(!showMenu);
  };

  const onCloseMenu = (
    e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => {
    setShowMenu(false);
  };

  return (
    <React.Fragment>
      <ReactModal
        className="modal-menu"
        isOpen={showMenu}
        onRequestClose={onCloseMenu}
        shouldCloseOnOverlayClick={true}
      >
        <SideBarMenus />
      </ReactModal>
      <nav className="navigation">
        {getMobileMenu()}
        <strong>SuperForum</strong>
      </nav>
    </React.Fragment>
  );
};
export default Nav;
