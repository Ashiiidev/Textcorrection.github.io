import React,{useState} from 'react'




export default function Textin(props) {
  const [text, settext] = useState('Enter your textt');
const clickup= ()=>{
console.log("it was clicked"+text);
let newtext = text.toUpperCase();
settext(newtext)
}
const clicklow= ()=>{
  console.log("it was clicked"+text);
  let newtext = text.toLowerCase();
  settext(newtext)
  }

  const clickhigh= ()=>{
    console.log("it was clicked"+text);
    let newtext = text.toUpperCase();
    settext(newtext)
    }
  
  
  
  
  
  
    const clickupChange= (event)=>{
  console.log("Onchange");
  settext(event.target.value)
}
const clicklowChange= (event)=>{
  console.log("Onchange");
  settext(event.target.value)
}

const clickhight= (event)=>{
  console.log("Onchange");
  settext(event.target.value)
}

const handleCopy = ()=>{
  
var text = document.getElementById("exampleFormControltexttarea1");
text.select();
navigator.clipboard.writeText(text.value);
}



//text = "new text"; //
 //settextt ("new textt");
  return (
    <>   
 <div className = "container" >
  
    <h2> {props.heading} </h2>
    <div className="mb-4">
  <textarea className="form-control" value = {text} onChange={clickupChange} id="exampleFormControltexttarea1" rows="7"></textarea>
   </div>
     <button class ="btn btn-success mx-1"onClick={clickup}>Covert To Big</button>
     <button class="btn btn-info mx-1 "onClick={clicklow}onChange={clicklowChange}>Convert To small</button>
     <button class ="btn btn-warning mx-1 "onClick={clickhigh}onChange={clickhight}>Convert to medium</button>
     <button class ="btn btn-warning mx-1 "onClick={handleCopy}>Copy textt</button>
       </div>
 <div className ="container m-4">
<h2>textt Summary</h2>
<p>{text.split("").length} words {text.length} Characters  repeat {text.split("").length}</p>
<p>{0.008 *text.split("").length }  <strong>Minutes read</strong></p>
 <h2>latst past</h2>
 <p>{text}</p>
 </div>
 
 </>
  
    )

}
