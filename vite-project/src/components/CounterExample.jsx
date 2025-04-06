import { useState } from "react";

function CounterExample(){
    const [a, setA] = useState(10);

    const [name, display] = useState("");

    function handleUpdate(){
        setA(a+1);
        console.log(a);
    }

    return(
        <div className="w-52 h-52 border-black m-8">
            <p>a : {a}</p>
            <button className="border bg-slate-100" onClick={handleUpdate}> Update A</button>

            <input  type="text" className="border-2 border-black m-4" onChange={(e) => display(e.target.value)}/>
            <p>{name}</p>
        </div>
    )

}

export default CounterExample;