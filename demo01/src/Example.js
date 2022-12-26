
import React, {useState,useEffect} from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";

function Index(){
    useEffect(()=>{
        console.log('useEffect=>you are coming!Index页面')
        return ()=>{
            console.log('you are leaving!Index页面')

        }
    },[])
    return <h2>peter.com</h2>
}
function List(){
    useEffect(()=>{
        console.log('useEffect=>you are coming!List页面')
        return ()=>{
            console.log('you are leaving!List页面')

        }
    },[])
    return <h2>List page</h2>
}
function  Example(){
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log(`useEffect=>You clicked ${count} times`)
        return ()=>{
            console.log('====================')
        }
    },[count])
        return (
            <div>
                <p>you clicked {count} times</p>
                <button onClick={()=>{setCount(count+1)}}>Click me</button>
                <Router>
                    <ul>
                        <li><Link to="/">home page</Link></li>
                        <li><Link to="/list/">list</Link></li>
                    </ul>
                    <Route path="/" exact component={Index}/>
                    <Route path="/list/"  component={List}/>

                </Router>
            </div>
        );
}
export default Example;
