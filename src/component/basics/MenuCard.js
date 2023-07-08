import React from 'react'

const MenuCard = ({ MenuData }) => {
    // console.log(MenuData)
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
                                        <span className="card-tag subtle">Order Now</span>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </section>  </>
    )
}

export default MenuCard