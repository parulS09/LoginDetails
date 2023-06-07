import React, { useMemo, useState } from 'react'

function UseMemo() {
    var [ data, setData] = useState(0)
    var [count,setCount] = useState(0)

    function IncreaseData(){
        setData(data+1)
    }

    function IncreaseCount(){
        setCount(count+1)
    }

    //it only takes function same as useEffect with empty array 
    //it is used to stop rerender of a specific function and only renders when specific values change/
    //e.g masterbation
    var Random = useMemo(()=>{
        console.log("this function is working")
    },[count])


    

    return (
        <>
            <h1>Thiss is data : {data}</h1>
            <h1>Thiss is count : {count}</h1>
            {Random}
            <button onClick={() => {IncreaseData()}}>Increment Data</button>
            <button onClick={() => {IncreaseCount()}}>Increment Count</button>

        </>
    )
}

export default UseMemo