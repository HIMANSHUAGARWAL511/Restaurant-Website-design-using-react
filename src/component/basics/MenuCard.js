import React, { useEffect, useState } from 'react'

const MenuCard = ({ MenuData }) => {
    // console.log(MenuData)
    const [count, setcount] = useState(0)
    useEffect(() => {
        if (count === 0) {
            document.title = `cart is empty`
        } else if (count === 1) {
            document.title = `${count} product added to the cart`
        }
        else {
            document.title = `${count} products added to the cart`
        }

    }, [count])
    return (
        <> <section className="main-card--cointainer">
            {
                //style={{ color: "red" }}inline css
                MenuData.map((currElem) => {

                    return (
                        <>
                            <div className="ca rd-container" key={currElem.id}>
                                <div className="card">
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">{currElem.id}</span>
                                        <span className="card-author subtle">{currElem.category}</span>
                                        <h2 className="card-title">{currElem.name}</h2>
                                        <span className="card-description subtle">{currElem.description}</span>
                                        <div className="card-read">Read</div>
                                        <img src={currElem.image} alt="images" srcset="" width="300px" height="300px"></img>
                                        <span className="card-tag subtle" onClick={() => {
                                            setcount(count + 1)
                                        }}>Add to cart</span>
                                        <span className="card-tag subtle" onClick={() => {
                                            count === 0 ? setcount(0) : setcount(count - 1)
                                        }} style={{ "margin-top": "-261px" }}>delete to cart</span>
                                    </div>
                                </div>
                            </div >
                        </>
                    )
                })
            }
        </section >  </>
    )
}

export default MenuCard