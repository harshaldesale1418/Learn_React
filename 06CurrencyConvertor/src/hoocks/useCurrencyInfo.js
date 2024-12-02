import { useEffect,useState } from "react"

function useCorrencyInfo(currency){
    const [data,setData] = useState({})
    useEffect( ()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        console.log(data);
        
    },[currency])
    console.log(data);
    
    return data
}

export default useCorrencyInfo;

//this is custom hoock 
//in last line we are returning hole function this scinario happen in default hoocks as well