import React,{useState} from 'react'


export default function Body(props) {
    const handleexptaspaces =()=>{
      
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAllert('Extra spaces has been removed','success')
    }
    const handleCopy =()=>{
      
        let newText = text
        navigator.clipboard.writeText(newText)
        props.showAllert('Texts  has been  copied.','success')

    }
    const handleUpClick =()=>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAllert('Converted to upper case','success')

    
    }
    const toTitleCase=(str)=> {
        let newText = text.replace(/\b[a-z]/g, (x) => x.toUpperCase())
setText(newText)
props.showAllert('Converted to title case','success')
      }
    const handledelClick =()=>{
        let newText = ""
        setText(newText)
        props.showAllert('Removed all texts','success')

    }
    const handlelowClick =()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAllert('Converted to lower case','success')

    }
    const handleOnChange=(event)=>{
       setText( event.target.value)
      
    }
    const [text,setText]=useState('');
    return (
        <>
        

<div >
    <div className="myBox">

  <label htmlFor="myBox" className="form-label">Enter your text here</label>
  <textarea  id="myBox" placeholder='Enter your text here to analyze' rows="3"value={text} onChange={handleOnChange}></textarea>
    </div>
    <div className='buttons'>

  <button className='primary-btn' onClick={handleUpClick}>Convert to Uppercase</button>
  <button className='primary-btn' onClick={handlelowClick}>Convert to Lowercase</button>
  <button className='primary-btn' onClick={toTitleCase}>Convert to Title case</button>
  <button className='primary-btn' onClick={handleexptaspaces}>Remove extra spaces</button>
  <button className='primary-btn' onClick={handleCopy}>Copy Text</button>
  <button className='primary-btn' onClick={handledelClick}>Remove all</button>
    </div>
</div>
<div className='summuryText'>
    <h1>Your Text Summury</h1>
    <p>{text.split(" ").length} Words and {text.length} Characters</p>
    <p> Read time: {0.008* text.split(" ").length} Minutes</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Enter your text to the box to preview it here"}</p>
</div>

    </>
  )
}
