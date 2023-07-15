import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Food Delivery app",
    description:
      "The food delivery app is built using the MERN stack,the app consists of several components, including the Home screen,My Orders screen, Cart screen, Login and Logout screen and Admin screen",
    image: "/thankfulthoughts.png",
    github: "https://github.com/swarnavopramanik/zomato-clone.git",
    link: "https://clipchamp.com/watch/GCNAj6C12mm",
  },
  {
    name: "Movie app",
    description:"React-based movie website that allows users to search for movies by title, sort them by genre, view trending and upcoming movies, and bookmark their favorite movies. The website is designed to be user-friendly and visually appealing.",
    image: "/familyphotos.png",
    github: "https://github.com/swarnavopramanik/book-my-show.git",
    link: "https://book-my-show-1701.vercel.app/",
  },
  {
    name: "Admin Panel Dashboard",
    description: "This Admin Panel includes one Dashboard, Three Pages, Four Apps, and Seven fully functional charts , with Theming, Tables, Charts, Calendar, Kanban and More..⭐",
    image: "/platoio.png",
    github: "https://github.com/swarnavopramanik/Dashboard.git",
    link: "https://vimeo.com/787277546?share=copy",
  },
  {
    name: "3D Portfolio",
    description:"Build a Fantastic 3D Portfolio Website with Three.js and React.js",
    image: "/hero-image.png", 
    github: "https://github.com/swarnavopramanik/3D-Portfolio.git",
    link: "https://vimeo.com/845506904?share=copy",
  },
  {
    name: "ThreeJS Project AI",
    description:"Build an AI-Powered 3D Website Using React | Customized Your own Tshirt with the help of AI technology",
    image: "/tshirt.png", 
    github: "https://github.com/swarnavopramanik/ThreeJS_Project_AI.git",
    link: "https://vimeo.com/845475626?share=copy",
  },
  {
    name: "Book record management",
    description:"This is a book record management API Backend for the management of records and books ✅✅",
    image: "/books.png", 
    github: "https://github.com/swarnavopramanik/book-record-management.git",
    link: "https://documenter.getpostman.com/view/22794440/VUxNSo77",
  },
  {
    name: "Stress-Detection-using-ML",
    description:"Stress, anxiety, and depression are threatening the mental health of people. Every person has a reason for having a stressful life. People often share their feelings on social media platforms like on Instagram in the form of posts and stories, and on Reddit in the form of asking for suggestions about their life on subreddits. In the past few years, many content creators have come forward to create content to help people with their mental health.",
    image: "/stress.png", 
    github: "https://github.com/swarnavopramanik/Stress-Detection-using-ML.git",
    link: "https://colab.research.google.com/drive/1x1SGTfvBemtCgF7vIIm86WjDrTMydz5s?usp=sharing",
  },
  {
    name: "Messenger-App",
    description:"Chat application using Firebase's Realtime Database. In the app, we will allow the user to log in with their Google account using Firebase's Google sign-in Authentication. We will also store and retrieve all the chatroom messages using Firebase's Cloud Firestore.",
    image: "/chat.png", 
    github: "https://github.com/swarnavopramanik/Messenger-App.git",
    link: ""
  },
  {
    name: "Decentralize amazon website",
    description:"Web3 eCommerce",
    image: "/amazon.png", 
    github: "https://github.com/swarnavopramanik/web3-amazon.git",
    link: "",
  },
  {
    name: "Weather-app-react.js",
    description:"There are many different types of APIs. One of the most common types, and some of the easiest to use, are weather APIs. Weather APIs pair nicely with geolocation APIs and some actually use geolocation behind the scenes. Most give back easy to understand data that can be impressively cheap to access.",
    image: "/weather.png", 
    github: "https://github.com/swarnavopramanik/Weather-app-react.js.git",
    link: "https://openweathermap.org/api",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
