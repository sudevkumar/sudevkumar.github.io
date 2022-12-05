import React from 'react'
import Footers from '../components/Footers/Footers'
import Navbar from '../components/Navbar/Navbar'
import HeroImages from '../components/HeroImageForRest/HeroImages'
import MyProjects from '../components/MyProjects/MyProjects'

function Projects() {
  return (
    <>
      <Navbar />
      <HeroImages heading="PROJECTS." text="Some Of My Most Recent Work"/>
      <MyProjects />
      <Footers />
    </>
  )
}

export default Projects
