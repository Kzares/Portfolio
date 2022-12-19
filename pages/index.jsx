import Head from "next/head"
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import WorkExperience from "../components/WorkExperience"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import {getPortfolio, getProfile, getSkills} from '../services/index'


function Home({ profile, projects, skills }) {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory scroll-smooth overflow-y-scroll z-0 overflow-x-hidden  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin scrollbar-thumb-rounded' >
      <Head>
        <title>Jorge's Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header/>
      <section id='hero' className="sm:snap-start" >
        <Hero img={profile.profiles[0].profile} />
      </section>
      <section id="about" className="sm:snap-center">
        <About profileImg={profile.profiles[0].profileImg} description={profile.profiles[0].description} />  
      </section>      
      {/* 
      <section id="experience" className='sm:snap-end'>
        <WorkExperience/>
      </section>
      */}
      <section id="skills" className="sm:snap-start">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="sm:snap-end">
        <Projects projects={projects} />
      </section>
      <section id="contact" className="sm:snap-center">
        <Contact/>
      </section>


    </div>
  )
}
export default Home



export async function getStaticProps() {
  const profile = await getProfile()
  const projects = await getPortfolio()
  const skills = await getSkills()

  return {
    props:  {profile, projects, skills} 
  }
}




