import React from 'react'

import Menu from './MenuApi'
const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="btn-group">
                <button className="btn-group__item" onClick={() => {
                    React.filterItem("breakfast")
                }}>Breakfast</button>
                <button className="btn-group__item" onClick={() => {
                    React.filterItem("lunch")
                }}>Lunch</button>
                <button className="btn-group__item" onClick={() => {
                    React.filterItem("evening")
                }}> Evening</button>
                <button className="btn-group__item" onClick={() => {
                    React.filterItem("dinner")
                }}> Dinner</button>
                <button className="btn-group__item" onClick={() =>
                    React.setmenuData(Menu)} >All</button>
            </div>
        </nav>
    )
}

export default NavBar