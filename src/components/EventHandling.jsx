export const EventHandling = () => {

    const handleButtonClick = () => {
        alert('I am an OnClick Event.')
    }

    return (
        <>
            <button onClick={handleButtonClick}>Click Me!</button>
        </>
    )
}