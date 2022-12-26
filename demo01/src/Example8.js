import React, {useEffect, useRef, useState} from "react";
function Example8(){
    const inputEl=useRef(null)
    const onButtonClick=()=>{
        inputEl.current.value="hello"
        console.log(inputEl)
    }
    const  [text,setText]=useState('one')
    const textRef=useRef()

    useEffect(()=>{
        textRef.current=text
        console.log('textRef.current:',textRef.current)
    })
    return (
        <>
            <input type="text" ref={inputEl}/>
            <button onClick={onButtonClick}>在input上展示文字</button>
            <br/>
            <br/>
            <input  value={text} onChange={(e)=>{setText(e.target.value)}}/>
        </>
    )
}
export default Example8
