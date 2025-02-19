// import React, {useEffect, useState} from 'react';
import React from 'react';
import '../css_part/dropdown.css'
// import '../css_part/navbar.css'
import { Link } from 'react-router-dom';

function DropDownMenu() {
  return (
    <>
        <div class="dropdown">
            <button class="dropbtn">Dropdown</button>
            <div class="dropdown-content">
                <Link to="/profile">Link 1</Link>
                <Link href="/profile">Link 2</Link>
                <Link href="/profile">Link 3</Link>
            </div>
        </div>
    </>
  )
}

export default DropDownMenu
