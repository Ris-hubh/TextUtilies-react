import React, { useState } from 'react'



export default function TextForm(props) {
    const handleupClick = () => {
        //  console.log("uppercasebutton clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("converted to uppercase","success");
    }
    const handleloClick = () => {
        //  console.log("uppercasebutton clicked" + text);
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("converted to lowercase","success");
    }
    const handleclClick = (event) => {
        let newtext = "";
        setText(newtext);
        props.showAlert("Text cleared","success");
    }
    const handlecopy = () => {
        // var text = document.getElementById("mybox");
        // text.select();
        navigator.clipboard.writeText(text)
        // document.getSelection().removeAllRanges();
        props.showAlert("coppy to clipboard","success");
    }
    const handleextraspace = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("removed extra spaces","success");
    }

    const handleonChange = (event) => {
        // console.log("handleonChange clicked");
        setText(event.target.value);
    }

    const [text, setText] = useState("");

    return (
        <>
            <div className='container' style={{color :props.mode===`dark`?`white`:`#042743`}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label for="mybox" class="form-label">Example textarea</label> */}
                    <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor :props.mode===`dark`?`black`:`white`,color :props.mode===`dark`?`white`:`#042743`}} id="mybox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleupClick}>convert to uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleloClick}>convert to lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclClick}>clear text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlecopy}>copy text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleextraspace}>remove extra spaces</button>
            </div>
            <div className='container my-2'style={{color :props.mode===`dark`?`white`:`#042743`}} >
                <h1> text summary</h1>
                <p>text has {text.split(/\s+/).filter((element)=>{return element.length!==0}).length } words and {text.length} character</p>
                <p>it will take you {0.008 * (text.split("").filter((element)=>{return element.length!==0}).length)} minutes to read above text</p>
            </div>
        </>
    )
}
