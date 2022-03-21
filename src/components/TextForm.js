import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case","success");
    }
    const handleLoClick=()=>{
      // console.log("clicked");
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lower case","success");
  }
    const handleClearClick=()=>{
    // console.log("clicked");
    let newText='';
    setText(newText);
    props.showAlert("No text to view","success");
}
    const handleOnChange=(event)=> {
        // console.log("changed");
        setText(event.target.value);
    }
    
    const [text, setText]= useState("");
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'grey':'white'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
          <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows={8} defaultValue={""} style={{backgroundColor: props.mode==='light'?'grey':'white', color: props.mode==='dark'?'grey':'white'} } />
        </div>
        <button className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Upper-Case</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert to Lower-Case</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'grey':'white'}}>
      <h2>Your Text summary</h2>
      <p>{text.split(/\s+/).filter((e)=>{return e.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} minutes to read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something in the textbox to preview"}</p>
    </div>
    </>
  )
}
