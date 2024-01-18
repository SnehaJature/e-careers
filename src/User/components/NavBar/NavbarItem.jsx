import React from "react";

function NavbarItem({ itemName, icon }) {
  return (
    <div className="navbarItem" >
      <span>{itemName}</span>
      {icon}
    </div>
  );
}

export default NavbarItem;
