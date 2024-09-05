import React from 'react'

const NetflixCard = () => {
    const imageHeading = `illustration one`
    const imageSize = `Current Size : 1920 x 1080 || Resolution : 1080p`
    const imageTags = `Tags Used : HD wallpaper: anime, manga, anime girls, fan art, illustration, minimalism free download`
    const imageURL = `images/image_two.jpg`
//   
    return (
        <>
            <div>
                <h1>{imageHeading}</h1>
            </div>
            <div>
                <img 
                    src={imageURL} 
                    alt={imageHeading}
                    width='30%'
                    height='30%'/>
            </div>
            <div>
                <p>{imageSize}</p>
                <p>{imageTags}</p>
            </div>
        </>
    )
}

export default NetflixCard

export const Footer = () => {
    return <p>Copyright All reserved under act 24C</p>
}

export const Header = () => {
    return <p>All Links Available Here</p>
}