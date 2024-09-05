import ProfileCard from "./ProfileCard"

export const Profile = () => {
    return (
        <div>
            <h1>Profile Card Challenge</h1>
            <ProfileCard
                name="Rabi"
                age={22}
                greetings={
                    <div>
                        <strong>Hi Rabi, have a good day!</strong>
                    </div>
                }
            >
                <p>Hobbies: Reading, Gaming, Coding</p>
                <button>Contact Me!</button>
            </ProfileCard>
            <ProfileCard
                name="Riri"
                age={23}
                greetings={
                    <div>
                        <strong>Hi Riri, have a good day!</strong>
                    </div>
                }
            >
                <p>Hobbies: Reading, Listening music, Writing</p>
                <button>Contact Me!</button>
            </ProfileCard>
        </div>
    )
}