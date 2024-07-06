import React, { useState } from 'react'

const List = () => {
    const [obj,setobj]=useState([
        {
            id:1,
            Name:"Ravi",
            Marks:50,
            email:"HEllo@gmail.com"
        },
        {
            id:2,
            Name:"Ankit",
            Marks:50,
            email:"HEllo@gmail.com"
        },
        {
            id:3,
            Name:"Vishal",
            Marks:50,
            email:"HEllo@gmail.com"
        },
        {
            id:4,
            Name:"Rohit",
            Marks:50,
            email:"HEllo@gmail.com"
        }
    ]);
    return(
        <table>
            <thead>
                <td className='table table-dark table-hover'>id</td>
                <th>Name</th>
                <th>Marks</th>
                <th>email</th>
            </thead>
            <tbody>
                {obj.map((val)=>{return(
                    <tr key={val.id}>
                        <td>{val.id}</td>
                        <td>{val.Name}</td>
                        <td>{val.Marks}</td>
                        <td>{val.email}</td>
                    </tr>
                )
                })}
            </tbody>
        </table>
    )
}

export default List