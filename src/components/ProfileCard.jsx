import React from 'react'

const ProfileCard = ({ name, age, greetings, children }) => {
    return (
        <>
            <h2>My Name is : {name} </h2>
            <p>My Age is : {age} </p>
            <div>{greetings}</div>
            <div>{children}</div>
        </>
    )
}

// const ProfileCard = (props) => {
//     return (
//         <>
//             <h2>My Name is : {props.name} </h2>
//             <p>My Age is : {props.age} </p>
//             <div>{props.greetings}</div>
//             <div>{props.children}</div>
//         </>
//     )
// }

export default ProfileCard