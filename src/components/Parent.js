import React,{useState} from "react";
import Child from "./Child";



const Parent = ()=>{

    const [showModal,setShowModal] = useState(false)


    return (
        <div className="parent">
            <h1>Parent Component</h1>
             <Child  setShowModal={setShowModal}/>
            {
                showModal && <div className="childMe">
                    <h3>Modal Content</h3>
                    <p>This is the modal content.</p>
                </div>
            }
        </div>
    )
}

export default Parent