import React,{useState} from 'react'
import PropTypes from 'prop-types'

// useState : this is hooks

export default function Textform(props) {

  const [text, setText] = useState('');
  // text="new text" //wrong way to change text
  //setText("new text"); //correct way to change text


const handleUpClick = ()=>{
  // console.log(text);
   let newText = text.toUpperCase();
   setText(newText);
   props.showAlert("Converted To Upper Case","success")
}
const handlelowClick = ()=>{
  // console.log(text);
   let newText = text.toLowerCase();
   setText(newText);
   props.showAlert("Converted To Lower Case","success")
}
const handleOnChange = (event)=>{
  // console.log("On Change");
  setText(event.target.value)
  

}
const handleclear = ()=>{
  setText('');
  props.showAlert("Text Box Cleared","success")
}

const handlecopy = ()=>{
  let newText = document.getElementById('mybox');
  newText.select();
  navigator.clipboard.writeText(newText.value);
  props.showAlert("Text Copied","success")
}

const handlespace = ()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Space removed","success")
}


 
  return (
    <>
    <div>
  
     <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
     <div className="mb-3">
      <textarea className="form-control" id="mybox" rows="8" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange}></textarea>
    </div>
    <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Upper Case</button>
    <button className='btn btn-primary mx-1' onClick={handlelowClick}>Convert to lower Case</button>
    <button className='btn btn-primary mx-1' onClick={handleclear}>Clear Text</button>
    <button className='btn btn-primary mx-1' onClick={handlecopy}>Copy Text</button>
    <button className='btn btn-primary mx-1' onClick={handlespace}>Remove Extra Space</button>
  </div>

  <div className="container my-3">
 <h2 style={{color:props.mode==='dark'?'white':'black'}}>Your text Summary</h2>
 <p style={{color:props.mode==='dark'?'white':'black'}}>{text.split(" ").filter((t)=>t!=="").length} words {text.length} characters</p>
 <p style={{color:props.mode==='dark'?'white':'black'}}>{text.split(" ").length*0.008} minutes takes to read above word</p>
 <h2 style={{color:props.mode==='dark'?'white':'black'}}>preview</h2>
 <p style={{color:props.mode==='dark'?'white':'black'}}>{text.length>0?text:"Enter in above textbox to preview here"}</p>
  </div>
  </>

  )
}

Textform.propTypes = {heading:PropTypes.string.isRequired}
