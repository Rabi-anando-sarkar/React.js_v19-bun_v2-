import { useState } from "react"

const users = [
    {name: 'rabi', age: 21},
    {name: 'riri', age: 22},
    {name: 'shailja', age: 21},
    {name: 'sahej', age: 21},
    {name: 'sanskriti', age: 20},
]

// export const ChallengeOne = () => {
//     return (
//         <>
//             <h1>Users List</h1>
//             <ul>{users.map((curEle,index) => {
//                 return (
//                     <li
//                         key={index}
//                     >User name : {curEle.name} ; User age {curEle.age}</li>
//                 )
//             })}</ul>
//         </>
//     )
// }

export const ChallengeOne = () => {
    const [users,setUsers] = useState([
        {name: 'rabi', age: 21},
        {name: 'riri', age: 22},
        {name: 'shailja', age: 21},
        {name: 'sahej', age: 21},
        {name: 'sanskriti', age: 20},
    ])
    return (
        <>
            <h1>Users List</h1>
            <ul>
                {
                    users.map((curEle,index) => {
                        return (
                            <li key={index}>User name : {curEle.name} ; User age {curEle.age}</li>
                        )
                    })
                }
            </ul>
        </>
    )
}
