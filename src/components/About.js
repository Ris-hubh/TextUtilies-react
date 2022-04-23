import React, { useState } from 'react'

export default function About() {
    const [myStyle, setMyStyle] = useState(
        {
            color: "black",//
            backgroundColor: "white",//
            border: '1px solid back'//
        }
    )
    const [btntext, setbtntext] = useState("Enable light mode")

    const toggleStyle = () => {
        if (myStyle.color === "white") {
            setMyStyle(
                {
                    color: "black",
                    backgroundColor: "white",
                    border: '1px solid back'
                })
            setbtntext("Enable dark mode")
        }
        else {
            setMyStyle({
                    color: "white",
                    backgroundColor: "black",
                    border: '1px solid white'
                })
            setbtntext("Enable light mode")
        }
    }
    return (
        <div className='container' style={myStyle}>
            <h2 className='my-3'> About Us</h2>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>About creater</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This website is created by Rishabh for learning purpose hope you like it.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>About TextUtilies</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Testutilies is a website where you can manipulate your text.
                            This website is created using reactjs
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-3'>
                <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
            </div>
        </div>
    )
}
