import { useState } from "react"

export const DerivedState = () => {
    const [users,setUsers] = useState([
        {name: 'rabi', age: 21},
        {name: 'riri', age: 22},
        {name: 'shailja', age: 21},
        {name: 'sahej', age: 21},
        {name: 'sanskriti', age: 20},
    ])

    // the variables created below are called derived state
    const userTotal = users.length
    const userAverageAge = (users.reduce((acc,cur) => (acc + cur.age),0))/userTotal

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
            <p>Total Users : {userTotal}</p>
            <p>Average Age : {userAverageAge}</p>
        </>
    )
}