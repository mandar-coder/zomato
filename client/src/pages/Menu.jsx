import React, { useState } from "react";
import MenuCollection from "../Components/Restaurant/MenuCollection";

function Menu() {
  const [menus, setMenus] = useState([
    "https://b.zmtcdn.com/data/menus/593/18233593/5b969d0a3ba13ae80c0df1e0d7447b02.jpg",
    "https://b.zmtcdn.com/data/menus/593/18233593/a181458955e1390aa366c636c2d3f0d5.jpg",
  ]);

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <MenuCollection menuTitle="Menu" pages={menus.length} image={menus} />
      </div>
    </>
  );
}

export default Menu;