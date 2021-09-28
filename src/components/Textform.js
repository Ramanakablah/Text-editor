import React ,{useState} from 'react'

export default function Textform(props) {

    const[text, settext] = useState("enter the text")
    const [mystyle, setmystyle] = useState({
      color:'black',
      fontWeight:'none'
    })

    const handleit=(event)=>{
      settext(event.target.value);
    }
    const clearTxt=()=>{
      settext('');
      setmystyle({
       color:'black'
      })
      props.showalert("textarea is clean","Success")
    }

    const Red=()=>{
      setmystyle({
        color:'Red'
      })
      props.showalert("Dark mode on","warning")
    }
    
    const Blue=()=>{
      setmystyle({
        color:'#0017FF',
        fontWeight:'normal'
      })
      props.showalert("colour is blue","primary")
    }

    const Bold=()=>{
      setmystyle({
        
        fontWeight:'Bold'
      })
      props.showalert("Text is converted in Bold","Success")
    }

    const Toupper=()=>{
        let newtext=text.toUpperCase();
        settext(newtext); 
        props.showalert("converted to upper","Success")
    }
    
    return (<>
        <div className="container">
        <h1 style={{color: props.mode==='light'?'black':'white'}} >Enter your text here..</h1>
        </div>
        <div className="container my-4">
         <textarea className="form-control" id="myBox" column="10" onChange={handleit} value={text} style={mystyle} ></textarea>
          <button className="btn btn-primary my-3" onClick={Toupper}> To upper case </button>
           <button className="btn btn-danger mx-3 my-3" onClick={clearTxt}> Clear Text</button>
           <button className="btn btn-danger mx-3 my-3" onClick={Red}>Red</button>
           <button className="btn btn-primary mx-3 my-3" onClick={Blue}>Blue</button>
           <button className="btn btn-primary mx-3 my-3" onClick={Bold}>Bold</button>
           <p style={{color: props.mode==='light'?'black':'white'}}>{text}</p>
        </div>
    </>
    )
}
