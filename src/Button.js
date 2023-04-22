import React, { useEffect, useState } from 'react'

export default function Button() {

    const [increCounter, setIncreCounter] = useState(0);
    const [decreCounter, setDecreCounter] = useState(0);

    // console.log("Initial Start");


    // function and dependencies
    // useEffect(() => {
    //     console.log("Call every time while clicking button")
    // },[])

    useEffect(() => {
        console.log("Call every time while clicking button")
    },[increCounter, decreCounter])

  return (
    <>
    {console.log("Component rendering")}
            <button onClick={() => {
                setIncreCounter(increCounter + 1)
            }}>Increase : {increCounter}</button>

            <button onClick={() => {
                setDecreCounter(decreCounter - 1)
            }}>Decrease : {decreCounter}</button>
    </>
  )
}
