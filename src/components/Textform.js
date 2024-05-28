import { useState } from "react"
import React from 'react'

export default function Textform(props) {

   const handleOnChange=(event)=>{
    setText(event.target.value);


    }
    const handleUpClick=()=>{
      
       let newText=text.toUpperCase();
    setText(newText);
    props.showAlert('changed to uppercase','primary');

    }
    const handleClearClick=()=>{
      
      let newText="";
   setText(newText);
   props.showAlert('text cleared','primary');

   }
    const handleLoClick=()=>{
      
      let newText=text.toLowerCase();
   setText(newText);
   props.showAlert('changed to lower case','primary');

   };
   const handleCapitalizeClick = () => {
    let newText = text
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  
    setText(newText);
    props.showAlert('changed to capitalized form','primary');
  };
  const handleSentenceClick = () => {
    let newText = text
     newText=newText.charAt(0).toUpperCase()+newText.slice(1).toLowerCase();
    setText(newText);
    props.showAlert('changed to sentenced form','primary');
  };
  
  
  
    const[text,setText]= useState('');
  return (
    <>
    <div className= 'my-3'style={{color:props.mode==='dark'? 'white':'black'}}>
      <div class="mb-3">
        <h1>Enter your text here</h1>
        <label htmlFor="exampleFormControlTextarea1"  class="form-label"></label>
        <textarea className="form-control"value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'? '#122451':'white',color:props.mode==='dark'? 'white':'black'}} id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button disabled={text.length===0} type="button" className="btn btn-primary mx-3 my-3" onClick={handleUpClick}>convert to UPPERCASE</button>
      
      <button disabled={text.length===0} type="button" className="btn btn-primary mx-3 my-3" onClick={handleLoClick}>convert to lowercase</button>
      <button disabled={text.length===0} type="button" className="btn btn-primary mx-3 my-3 " onClick={handleCapitalizeClick}>Capitalize</button>
      <button disabled={text.length===0} type="button" className="btn btn-primary mx-3 my-3" onClick={handleSentenceClick}>Sentence</button>
      <button disabled={text.length===0} type="button" className="btn btn-primary mx-3 my-3 " onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container my-5"style={{color:props.mode==='dark'? 'white':'black'}}>
      <h3>your summary</h3>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} word and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
      <h3>PREVIEW</h3>
      <p>{text.length>0?text:"nothing to preview"}</p>
    </div>
    </>
  )
}
