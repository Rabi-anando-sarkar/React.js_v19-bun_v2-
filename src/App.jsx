import React from "react"
import { DerivedState } from "./components/DerivedState"
// import NetflixSeries from "./components/NetflixSeries"
// import './App.css'
// import { ChallengeOne } from "./components/ChallengeOne"
// import { EventHandling } from "./components/EventHandling"
// import { EventProps } from "./components/EventProps"
// import { HowToUseState } from "./components/hooks/HowToUseState"
// import NetflixCard, { Footer, Header } from "./components/NetflixCard"
// import { Profile } from "./components/Profile"

// the original way of writing

export const App = () => {
  return (
    // <section className="container">
    // <h1 className="card-heading">List of Top 10 Netflix series</h1>
    //   {/* <Header/>
    //   <NetflixCard/>
    //   <NetflixCardOne/>
    //   <NetflixCardTwo/>
    //   <NetflixCardThree/>
    //   <NetflixCardFour/>
    //   <Footer/> */}
    //   {/* <NetflixSeries/> */}
    //   {/* <Profile/> */}
    // </section>
    // <EventHandling/>
    // <EventProps/>
    <>
      {/* <HowToUseState/>
      <SiblingComponent/> */}
      {/* <ChallengeOne/> */}
      <DerivedState/>
    </>
  )
}

// the second way

// export const App = () => {
//   return React.createElement('h1',null,"We are using version 2 of writing React.");
// }


// netflix card
// const NetflixCardOne = () => {
//   const imageName = `Illustration One`;
//   const imagesize = `Current Size : 1920 x 1080 || Resolution : 1080p`;
//   const imageTags = `Tags Used : HD wallpaper: anime, manga, anime girls, fan art, illustration, minimalism free download`
//   const imageAges = 16

//   if (imageAges < 18) {
//     return (
//       <div>
//         <div className="image">
//           <img 
//             src="images/image_one.jpg" 
//             alt="image one"
//             width="40%"
//             height="30%"
//             />
//         </div>
//         <div>
//           <h3>{imageName}</h3>
//           <p>{imagesize}</p>
//           <p>{imageTags}</p>
//           <button>Not Available</button>
//         </div>
//       </div>
//     )
//   }
//   return (
//     <div>
//       <div className="image">
//         <img 
//           src="images/image_one.jpg" 
//           alt="image one"
//           width="40%"
//           height="30%"
//           />
//       </div>
//       <div>
//         <h3>{imageName}</h3>
//         <p>{imagesize}</p>
//         <p>{imageTags}</p>
//         <button>watch now</button>
//       </div>
//     </div>
//   )
// }

// const NetflixCardTwo = () => {
//   const imageName = `Illustration One`;
//   const imagesize = `Current Size : 1920 x 1080 || Resolution : 1080p`;
//   const imageTags = `Tags Used : HD wallpaper: anime, manga, anime girls, fan art, illustration, minimalism free download`
//   const imageAges = 19
  
//   return (
//     <div>
//       <div className="image">
//         <img 
//           src="images/image_two.jpg" 
//           alt="image one"
//           width="40%"
//           height="30%"
//           />
//       </div>
//       <div>
//         <h3>{imageName}</h3>
//         <p>{imagesize}</p>
//         <p>{imageTags}</p>
//         <button>{imageAges >= 18 ? `Watch Now` : `Not available`}</button>
//       </div>
//     </div>
//   )
// }

// const NetflixCardThree = () => {
//   const imageName = `Illustration One`;
//   const imagesize = `Current Size : 1920 x 1080 || Resolution : 1080p`;
//   const imageTags = `Tags Used : HD wallpaper: anime, manga, anime girls, fan art, illustration, minimalism free download`
//   const imageAges = 11

//   let canWatch = 'Watch Now'
//   if(imageAges < 18 ) return canWatch = 'Not available'
  
//   return (
//     <div>
//       <div className="image">
//         <img 
//           src="images/image_three.jpg" 
//           alt="image one"
//           width="40%"
//           height="30%"
//           />
//       </div>
//       <div>
//         <h3>{imageName}</h3>
//         <p>{imagesize}</p>
//         <p>{imageTags}</p>
//         <button>{canWatch}</button>
//       </div>
//     </div>
//   )
// }

// const NetflixCardFour = () => {
//   const imageName = `Illustration One`;
//   const imagesize = `Current Size : 1920 x 1080 || Resolution : 1080p`;
//   const imageTags = `Tags Used : HD wallpaper: anime, manga, anime girls, fan art, illustration, minimalism free download`
//   const imageAges = 20

//   const canWatch = () => {
//     if(imageAges < 18 ) return 'Not available'
//     return "Watch Now"
//   }
  
//   return (
//     <div>
//       <div className="image">
//         <img 
//           src="images/image_five.jpg" 
//           alt="image one"
//           width="40%"
//           height="30%"
//           />
//       </div>
//       <div>
//         <h3>{imageName}</h3>
//         <p>{imagesize}</p>
//         <p>{imageTags}</p>
//         <button>{canWatch()}</button>
//       </div>
//     </div>
//   )
// }

// export const SiblingComponent = () => {
//   console.log('This is Sibling Component');
//   return (
//       <>
//           <h1>Sibling Component Rerendered</h1>
//       </>
//   )
// }
