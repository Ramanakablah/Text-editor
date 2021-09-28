import React,{useState}from 'react'

export default function Calculate() {
    
    const [N1, setN1] = useState(1);
    const [N2, setN2] = useState(2);
    const [res, setres] = useState(0)   
    
    const First_Data =(event)=>{
        setN1(event.target.value)
    }
    
    const Second_Data =(event)=>{
        setN2(event.target.value);
        setres(N1*N2);
    }
    
console.log(res);

    return (<>
        <div>
            <input type="Number" value={N1} onChange={First_Data} />
        </div>
        <div>
            <input type="Number" value={N2} onChange={Second_Data} />
        </div>
        <p>{N1} + {N2} </p>
        </>
    )
}
