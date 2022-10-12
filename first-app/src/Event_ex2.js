import React, { useState } from "react";
const Event_ex2 = () => {
    const firstList = [{id: 1, name: "코디", email:"codi@gmail.com"}, {id:2, name="윤소희", email="yoonsohee@gmail.com"}]
    const [list, setList] = useState(firstList)
    const [info, setInfo] = useState({
        id: "",
        name: "",
        email: ""   
    })
    const onChange = (e) => {
        nextInfo = {...info, [e.target.name] : e.target.value }
        setInfo(nextInfo);
    }

    return (
        <>
            <input name="name" type="text" placeholder="이름" onChange={onChange}></input>
            <input name="email" type="text" placeholder="이메일" onChange={onChange}></input>
            <button type="button">등록</button>
        </>
    )
}

export default Event_ex2;
