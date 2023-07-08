import React, { useState } from 'react';
import "./style.css";
import Menu from "./MenuApi.js"
import MenuCard from './MenuCard';
import NavBar from './NavBar';
function Restaurent() {
    const [MenuData, setmenuData] = useState(Menu)
    //const object = { color: "red" }internal css

    const filterItem = (category) => {

        const updatedList = Menu.filter((currElem) => {

            return currElem.category === category;

        });

        setmenuData(updatedList);

    }
    return (
        <>
            <NavBar />
            <MenuCard MenuData={MenuData} />
        </>
    )
}

export default Restaurent;