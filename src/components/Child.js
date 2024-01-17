import React from "react";



const Child =({setShowModal})=>{


    return (
        <div className="childMe">
            <h2>Child Component</h2>
            <button onClick={()=>setShowModal(true)}>Show Modal</button>
        </div>
    )
}

export default Child