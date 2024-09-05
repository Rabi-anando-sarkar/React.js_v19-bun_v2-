export const SeriesCard = ({ data }) => {
    const { 
        id,
        URL,
        Name,
        Ratings,
        Description,
        Tags
    } = data

    const buttonStyle = {padding: '.6rem' , margin: '2.4rem 0', color: 'white' , backgroundColor: 'black', border: '1px solid cyan' , borderRadius: '7%', width: '50%', height: '50px'}

    const ratingClass = Ratings >= 8.5 ? 'hits' : 'nonhits'

    return (
        <li key={id} className="border-card">
                            <div>
                                <img
                                    src={URL}
                                    alt={Name}
                                    width="100%"
                                    height="40%"
                                />
                            </div>
                            <div className="card-content">
                                <h2>Name : {Name}</h2>
                                <p>Ratings : <span className={`rating ${ratingClass}`}>{Ratings}</span> </p>
                                <p>Description : {Description}</p>
                                <p>Tags : {Tags.join(", ")}</p>
                                <a href="#" target="_blank">
                                    <button style={ buttonStyle }>Watch now!</button>
                                </a>
                            </div>
                        </li>
        );
}