
import React, {useState} from 'react';

function  Example2(){
    const [age,setAge]=useState(18)
    const [sex,setSex]=useState('male')
    const [work,setWork]=useState('front programmer')

        return (
            <div>
                <p>peter今年：{age}岁</p>
                <p>性别：{sex}</p>
                <p>工作是：{work}</p>
            </div>
        );
}
export default Example2;
