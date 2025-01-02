import React, { useEffect, useState } from "react";

function Github(){
    const [data,setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/chinud')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    })

    return (
        <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl align-center">Github Followers: {data.followers}
        <img src={data.avatar_url} className="w-40"/></div>
    )
}

export default Github