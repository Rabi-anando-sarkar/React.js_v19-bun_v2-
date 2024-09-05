import React from 'react'

const Practice = () => {
    const students = []
    return (
        <>
            <h1>Interview Questions</h1>
            <h2>Question</h2>
            <p>{students.length && "No students found"}</p>
            <p>Number of students : {students.length}</p>
            <p>Why we are getting 0 instead of no students found?</p>
            <hr/>

            <p>solution one</p>
            <p>{students.length || "No students found"}</p>
            <p>Number of students : {students.length}</p>
            <hr/>

            <p>solution two</p>
            <p>{students.length === 0 && "No students found"}</p>
            <p>Number of students : {students.length}</p>
            <hr/>

            <p>solution three</p>
            <p>{!students.length && "No students found"}</p>
            <p>Number of students : {students.length}</p>
            <hr/>

            <p>solution four</p>
            <p>{!Boolean(students.length) && "No students found"}</p>
            <p>Number of students : {students.length}</p>
            <hr/>
        </>
    )
}

export default Practice