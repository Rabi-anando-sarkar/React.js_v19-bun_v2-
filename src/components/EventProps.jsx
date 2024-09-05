export const EventProps = () => {

    const handleWelcomeUser = (user) => {
        alert(`Welcome!, ${user}`)
    }

    const handleHover = () => {
        alert(`Click Me Please!`)
    }

    return (
        <>
            <WelcomeUser 
                onClick={() => handleWelcomeUser("Rabi")}
                onMouseEnter = {handleHover}
            />
        </>
    )
}

const WelcomeUser = (props) => {
    return (
        <>
            <button onClick={props.onClick}>Click ME</button>
            <button onMouseEnter={props.onMouseEnter}>Hover ME</button>
            <button onClick={() => alert(`This is child Button`)}> Child button </button>
        </>
    )
}