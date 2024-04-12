import React from "react";
// > icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Header = ({ title, open, setOpen }) => {
  return (
    <div className="header">
      <h1 className="header_title">{ title }</h1>
      {
        open === true
        ?
        <div>
          <FontAwesomeIcon icon={faMinus} className="header_icon" onClick={ () => setOpen(false) } />
        </div>
        :
        <div>
          <FontAwesomeIcon icon={faPlus} className="header_icon" onClick={ () => setOpen(true) }/>
        </div>
      }
    </div>
  )
}

export default Header;
