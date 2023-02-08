import Head from 'next/head'
import SkillsStyles from '../styles/Skills.module.css'
import { 
	FaGithub,
	FaTwitter,
	FaLinkedin,
	FaNodeJs,
 } from "react-icons/fa"
import {ImCss3, ImHtmlFive2} from 'react-icons/im'
import {GrMysql} from 'react-icons/gr'
import {CgFigma} from 'react-icons/cg'

 import { 
	SiHashnode,
	SiPhotopea,
	SiGitlab,
	SiPython,
	SiJavascript,
	SiTypescript,
	SiGnubash,
	SiC,
	SiCplusplus,
	SiReact,
	SiNextdotjs,
	SiGatsby,
	SiStreamlit,
	SiRedux,
	SiFramer,
	SiTailwindcss,
	SiMaterialui,
	SiChakraui,
	SiBootstrap,
	SiExpress,
	SiDjango,
	SiFlask,
	SiApollographql,
	SiGraphql,
	SiFastapi,
	SiFirebase,
	SiSupabase,
	SiPostgresql,
	SiMysql,
	SiSqlite,
	SiMongodb,
	SiRedis,
	SiPrisma,
	SiTensorflow,
	SiPytorch,
	SiKeras,
	SiScikitlearn,
	SiOpencv,
	SiDocker,
	SiKubernetes,
	SiJenkins,
	SiTerraform,
	SiAnsible,
	SiGithubactions,
	SiGooglecloud,
	SiAmazonaws,
	SiLatex,
	SiUbuntu,
	SiLinux,
	SiKalilinux,
	SiNumpy,
	SiPandas,
	SiScipy,
	SiJest,
	SiPytest,
	SiHeroku,
	SiNetlify,
	SiVercel,
	SiBabel,
	SiFigma,
	SiCanva,
	SiPostman,
	SiGit,
	SiSocketdotio,
	SiDigitalocean,
	SiGoland,
	SiHtml5,
	SiCss3,
	SiSass,
	SiNpm,
	SiCodeforces,
	SiLinkedin,
	SiGmail,
	SiGithub,
	SiLeetcode
 } from "react-icons/si"
import {FaReact,FaSass,FaBootstrap,FaPython} from 'react-icons/fa'
import {SiSolidity,SiAdobephotoshop} from 'react-icons/si'
import {
	BsChevronDoubleDown
} from "react-icons/bs"
import {
	SlCalender
} from "react-icons/sl"

const Home = () => {

	return (
		<div>
			<Head>
				<title>Anil kumar Portfolio</title>
				<meta name="description" content="Portfolio for Deepanshu Jain" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>


			<a id="home"></a>
			<div>
				<div className="pt-16 md:mx-32 md:pt-44">
					<div className="md:flex md:justify-between">
						<div>
							<div className="flex space-x-4 justify-center mb-16 md:flex md:flex-col md:space-y-4 md:items-center md:my-16 md:mx-5">
								
								<div className={SkillsStyles.tooltip}>
								<a href="https://github.com/A-K-2001">
									<SiGithub size={25} />
								</a>
								<span className={SkillsStyles.tooltiptext}>GitHub</span></div>
							
								<div className={SkillsStyles.tooltip}>
								<a href="https://www.linkedin.com/in/anil-kumar-535799221/">
									<SiLinkedin size={25} />
								</a>
								<span className={SkillsStyles.tooltiptext}>Linkedin</span></div>
								
								<div className={SkillsStyles.tooltip}>
								<a href="mailto:kumaranilstps017@gmail.com">
									<SiGmail size={25} />
								</a>
								<span className={SkillsStyles.tooltiptext}>Mail</span></div>
							</div>
						</div>
						<div className="items-center mx-12 grow flex flex-col md:items-start">
							<h1 className="text-6xl flex items-center font-bold mb-4">
								Anil kumar
							</h1>
							<h1 className="text-2xl mb-4 text-green-400">
								Software Developer
							</h1>
							<p className="mb-12">
								I&apos;m Anil kumar, a software developer
								<br />
								I am a Full Stack Web Developer that loves tinkering with Artificial Intelligence and Machine Learning.
							</p>
							<a className="bg-green-500 text-white p-4 flex w-36 text-1xl rounded-xl justify-around font-semibold" href="mailto:kumaranilstps017@gmail.com">
								Say Hello
							</a>
						</div>
					</div>
					<div className="">
						<a className="flex justify-center mt-20 space-x-4 items-center" href="#about">
							<BsChevronDoubleDown />
							<div>Scroll down</div>
							<BsChevronDoubleDown />
						</a>
					</div>
				</div>
			</div>


			<a id="about"></a>
			<div>
				<div className="pt-28 md:mx-32 md:pt-44 flex flex-col items-center">
					<h1 className="text-5xl font-semibold mb-4">About Me</h1>
					<h1 className="text-2xl mb-4 text-green-400">My Introduction</h1>
					<div className="flex flex-col space-y-12 md:space-x-32 justify-center items-center md:items-start md:flex-row">
						<img className="h-72 w-72 rounded-xl" src="anildp.jfif" />
						<div className="flex flex-col space-y-20 justify-center items-center grow mx-12 md:items-start">
							<p>
								I&apos;m well versed in the technical domains of AI/ML, Web Development and DevOps.
								<br />
								I&apos;m willing to collaborate together on Open Source projects, am also interested in mentoring people that need help in tech and also like to give technical talks at various tech events, communities and conferences.
								<br />
								Feel free to reach out to me in case of any internship or job opportunites as well. Would also be willing to work as a freelancer too.
							</p>
							<a className="bg-green-500 text-white p-4 flex w-44 text-1xl rounded-xl justify-around font-semibold" download href="https://drive.google.com/file/d/1LoIF-QKc8mthgAseMitXszbbQaIm-dr2/view?usp=sharing">
								Download CV
							</a>
						</div>
					</div>
				</div>
			</div>


			<a id="skills"></a>
			<div>
				<div className="pt-28 md:mx-32 md:pt-44 flex flex-col items-center">
					<h1 className="text-5xl font-semibold mb-4">Skills</h1>
					<h1 className="text-2xl mb-4 text-green-400">My Technical Skills</h1>
					<div className="grid grid-cols-4 md:grid-cols-12 gap-x-8 gap-y-8">
					{/* <div className={SkillsStyles.Techs}> */}
                            <div className={SkillsStyles.tooltip}><SiCplusplus size={50}/><span className={SkillsStyles.tooltiptext}>C++</span></div>
                            <div className={SkillsStyles.tooltip}><SiJavascript size={50}/><span className={SkillsStyles.tooltiptext}>Javascript</span></div>
                            <div className={SkillsStyles.tooltip}><SiTypescript size={50}/><span className={SkillsStyles.tooltiptext}>Typescript</span></div>
                            <div className={SkillsStyles.tooltip}><FaPython size={50}/><span className={SkillsStyles.tooltiptext}>Python</span></div>
                            <div className={SkillsStyles.tooltip}><FaReact size={50}/><span className={SkillsStyles.tooltiptext}>React</span></div>
                            <div className={SkillsStyles.tooltip}><SiRedux size={50}/><span className={SkillsStyles.tooltiptext}>Redux</span></div>
                            <div className={SkillsStyles.tooltip}><SiNextdotjs size={50}/><span className={SkillsStyles.tooltiptext}>NextJs</span></div>
                            <div className={SkillsStyles.tooltip}><ImHtmlFive2 size={50}/><span className={SkillsStyles.tooltiptext}>HTML</span></div>
                            <div className={SkillsStyles.tooltip}><ImCss3 size={50}/><span className={SkillsStyles.tooltiptext}>CSS</span></div>
                            <div className={SkillsStyles.tooltip}><FaSass size={50}/><span className={SkillsStyles.tooltiptext}>Sass</span></div>
                            <div className={SkillsStyles.tooltip}><SiTailwindcss size={50}/><span className={SkillsStyles.tooltiptext}>Tailwind CSS</span></div>
                            <div className={SkillsStyles.tooltip}><SiMaterialui size={50}/><span className={SkillsStyles.tooltiptext}>Material UI</span></div>
                            <div className={SkillsStyles.tooltip}><FaBootstrap size={50}/><span className={SkillsStyles.tooltiptext}>Bootstrap</span></div>
                            <div className={SkillsStyles.tooltip}><SiNpm size={50}/><span className={SkillsStyles.tooltiptext}>npm</span></div>
                            <div className={SkillsStyles.tooltip}><FaNodeJs size={50}/><span className={SkillsStyles.tooltiptext}>NodeJS</span></div>
                            <div className={SkillsStyles.tooltip}><SiExpress size={50}/><span className={SkillsStyles.tooltiptext}>Express</span></div>
                            <div className={SkillsStyles.tooltip}><SiMongodb size={50}/><span className={SkillsStyles.tooltiptext}>MongoDB</span></div>
                            <div className={SkillsStyles.tooltip}><SiPostgresql size={50}/><span className={SkillsStyles.tooltiptext}>PostgreSQL</span></div>
                            <div className={SkillsStyles.tooltip}><GrMysql size={50}/><span className={SkillsStyles.tooltiptext}>MySQL</span></div>
                            {/* <div className={SkillsStyles.tooltip}><SiSolidity size={50}/><span className={SkillsStyles.tooltiptext}>Solidity</span></div> */}
                            <div className={SkillsStyles.tooltip}><SiSocketdotio size={50}/><span className={SkillsStyles.tooltiptext}>Socket.io</span></div>
                            
							<div className={SkillsStyles.tooltip}><SiNumpy size={50}/><span className={SkillsStyles.tooltiptext}>Numpy</span></div>
							<div className={SkillsStyles.tooltip}><SiPandas size={50}/><span className={SkillsStyles.tooltiptext}>Pandas</span></div>
							<div className={SkillsStyles.tooltip}><SiKeras size={50}/><span className={SkillsStyles.tooltiptext}>Keras</span></div>
							<div className={SkillsStyles.tooltip}><SiTensorflow size={50}/><span className={SkillsStyles.tooltiptext}>Tensorflow</span></div>

						
                            <div className={SkillsStyles.tooltip}><SiGit size={50}/><span className={SkillsStyles.tooltiptext}>Git</span></div>
                            <div className={SkillsStyles.tooltip}><SiGithub size={50}/><span className={SkillsStyles.tooltiptext}>GitHub</span></div>
                            {/* <div className={SkillsStyles.tooltip}><SiGithubactions size={50}/><span className={SkillsStyles.tooltiptext}>GitHub Actions</span></div> */}
                            <div className={SkillsStyles.tooltip}><SiGitlab size={50}/><span className={SkillsStyles.tooltiptext}>GitLab</span></div>
                            <div className={SkillsStyles.tooltip}><SiGooglecloud size={50}/><span className={SkillsStyles.tooltiptext}>Google Cloud Platform</span></div>
                            <div className={SkillsStyles.tooltip}><SiFirebase size={50}/><span className={SkillsStyles.tooltiptext}>Firebase</span></div>
                            <div className={SkillsStyles.tooltip}><SiPostman size={50}/><span className={SkillsStyles.tooltiptext}>Postman</span></div>
                            <div className={SkillsStyles.tooltip}><SiHeroku size={50}/><span className={SkillsStyles.tooltiptext}>Heroku</span></div>
                            <div className={SkillsStyles.tooltip}><SiVercel size={50}/><span className={SkillsStyles.tooltiptext}>Vercel</span></div>
                            <div className={SkillsStyles.tooltip}><SiNetlify size={50}/><span className={SkillsStyles.tooltiptext}>Netlify</span></div>
                            <div className={SkillsStyles.tooltip}><SiLinux size={50}/><span className={SkillsStyles.tooltiptext}>Linux</span></div>
                            <div className={SkillsStyles.tooltip}><SiUbuntu size={50}/><span className={SkillsStyles.tooltiptext}>Ubuntu</span></div>


							<div className={SkillsStyles.tooltip}><SiCanva size={50}/><span className={SkillsStyles.tooltiptext}>Canva</span></div>
                            {/* <div className={SkillsStyles.tooltip}><SiAdobephotoshop size={50}/><span className={SkillsStyles.tooltiptext}>Photoshop</span></div> */}
                            {/* <div className={SkillsStyles.tooltip}><SiPhotopea size={50}/><span className={SkillsStyles.tooltiptext}>Photopea</span></div> */}
                            {/* <div className={SkillsStyles.tooltip}><CgFigma size={50}/><span className={SkillsStyles.tooltiptext}>Figma</span></div> */}
                        {/* </div> */}
					</div>
				</div>
			</div>


			{/* <a id="experience"></a>
			<div>
				<div className="pt-28 md:mx-32 md:pt-44 flex flex-col items-center">
					<h1 className="text-5xl font-semibold mb-4">Experience</h1>
					<h1 className="text-2xl mb-4 text-green-400">My Work So Far</h1>
					<div className="flex flex-col ml-6">
						<div className="flex space-x-8 md:space-x-32 my-8">
							<div className="">
								<div className="inline-block h-16 w-16 rounded-full">
									<img className="h-16 w-16 rounded-full" src="GSOC.png" />
								</div>
								<div className="block w-1 h-full bg-green-400 ml-7"></div>
							</div>
							<div>
								<h1 className="text-2xl mb-4">GSoC Contributor</h1>
								<h1 className="text-2xl mb-4 text-green-400">Intel, Python Software Foundation</h1>
								<div>
									<h1 className="flex space-x-4 items-center"><SlCalender /><div>May 2022 - September 2022</div></h1>
								</div>
							</div>
						</div>	
						<div className="flex space-x-8 md:space-x-32 my-8">
							<div className="">
								<div className="inline-block h-16 w-16 rounded-full">
									<img className="h-16 w-16 rounded-full" src="DIGIPPLUS.jfif" />
								</div>
								<div className="block w-1 h-full bg-green-400 ml-7"></div>
							</div>
							<div>
								<h1 className="text-2xl mb-4">SDE Intern</h1>
								<h1 className="text-2xl mb-4 text-green-400">Digipplus</h1>
								<div>
									<h1 className="flex space-x-4 items-center"><SlCalender /><div>October 2021 - November 2021</div></h1>
								</div>
							</div>
						</div>	
					</div>
				</div>
			</div> */}


			<a id="projects"></a>
			<div>
				<div className="pt-28 md:mx-32 md:pt-48 flex flex-col items-center">
					<h1 className="text-5xl font-semibold mb-4">Projects</h1>
					<h1 className="text-2xl mb-4 text-green-400">Things I&apos;ve Created</h1>
					<div className="grid grid-cols-1 gap-y-8">
						<div className="flex flex-col items-center py-10 px-10 mx-4 shadow-sm shadow-green-400 rounded-xl space-y-4">
							<h1 className="text-3xl font-semibold pb-4">Lets Groww</h1>
							{/* <div className="flex space-x-2 items-center justify-center">
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
							</div> */}
							<p className="">
							Market place to connect company and investor.
							</p>
							<p className="">
							allow real time chat using socket programming with minimum latency.
							</p>
							<p className="">
							Added Socket IO support to real time chat and a client-side application built using the ReactJS,redux, bootstrap + material UI and a Backend application built using the NodeJS + ExpressJS.
							</p>
							<p className="">
							  Firebase Realtime Database use for image and mongodb for rest.
							</p>
							<div>
								<a className="bg-green-500 text-white p-4 flex w-18 text-1xl rounded-xl font-semibold mt-4" href="https://github.com/A-K-2001/frontend">View</a>
							</div>
						</div>
						<div className="flex flex-col items-center py-10 px-10 mx-4 shadow-sm shadow-green-400 rounded-xl space-y-4">
							<h1 className="text-3xl font-semibold pb-4">E-Market Site</h1>
							{/* <div className="flex space-x-2 items-center justify-center">
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
							</div> */}

							<p className="">
							An E-commerce website where both customers and sellers can register with editable profiles, add-to-cart- buy-now optionswith user verification and responsiveness.
							</p>
							<p className="">
							Has an admin control panal.
							</p>
							<p className="">
							Made on HTML, CSS, Javascript + NodeJS + Express and deployed on Heroku. mongodb as the database of choice with cryptoJS encryption.
							</p>
							
							<div>
								<a className="bg-green-500 text-white p-4 flex w-18 text-1xl rounded-xl font-semibold mt-4" href="https://61ee8ac46a342f000877850a--amazing-leakey-ca34e3.netlify.app//">View</a>
							</div>
						</div>
						<div className="flex flex-col items-center py-10 px-10 mx-4 shadow-sm shadow-green-400 rounded-xl space-y-4">
							<h1 className="text-3xl font-semibold pb-4">Realtime Tictactoe</h1>
							{/* <div className="flex space-x-2 items-center justify-center">
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
							</div> */}
							<p className="">
							• proper User management and persistence.
							</p>
							<p className="">
							Added Socket IO support to real time experience and a client-side application built using the ReactJS,redux and a Backend application built using the NodeJS + ExpressJS.
							</p>
							<p className="">
							mongodb as the database of choice with cryptoJS encryption.
							</p>
							
							
							<div>
								<a className="bg-green-500 text-white p-4 flex w-18 text-1xl rounded-xl font-semibold mt-4" href="https://github.com/A-K-2001/tictactoe">View</a>
							</div>
						</div>
						<div className="flex flex-col items-center py-10 px-10 mx-4 shadow-sm shadow-green-400 rounded-xl space-y-4">
							<h1 className="text-3xl font-semibold pb-4">Depression Detection </h1>
							{/* <div className="flex space-x-2 items-center justify-center">
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
							</div> */}
							<p className="">
							One stop solution for depression detection using tweets.
							</p>
							<p className="">
							User BERT Transformer for the model,had an accuracy of more than 90%.

							</p>
							
							<div>
								<a className="bg-green-500 text-white p-4 flex w-18 text-1xl rounded-xl font-semibold mt-4" href="https://github.com/A-K-2001/depression-detection">View</a>
							</div>
						</div>
						
						<div className="flex flex-col items-center py-10 px-10 mx-4 shadow-sm shadow-green-400 rounded-xl space-y-4">
							<h1 className="text-3xl font-semibold pb-4">Portfolio Website</h1>
							{/* <div className="flex space-x-2 items-center justify-center">
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
							</div> */}
							<p className="">
								Personal portfolio website. Created using NextJS and hosted on Vercel.
							</p>
							<div>
								<a className="bg-green-500 text-white p-4 flex w-18 text-1xl rounded-xl font-semibold mt-4" href="https://github.com/XDRAGON2002/PORTFOLIO">View</a>
							</div>
						</div>
					</div>
					<a className="bg-green-500 text-white p-4 flex w-36 text-1xl rounded-xl justify-around font-semibold mt-12" href="https://github.com/deepanshu2810">View All</a>
				</div>
			</div>


			

			<footer>
				<div className="pt-28 md:mx-32 mb-16 md:pt-48 flex flex-col items-center">
					<h1 className="text-5xl font-semibold mb-4"> Anil kumar</h1>
					<h1 className="text-2xl mb-4 text-green-400">Reach Out</h1>
					<div className="flex space-x-4 items-center my-16 mx-5">
					<div className={SkillsStyles.tooltip}>
								<a href="https://github.com/A-K-2001">
									<SiGithub size={25} />
								</a>
								<span className={SkillsStyles.tooltiptext}>GitHub</span></div>
							
								<div className={SkillsStyles.tooltip}>
								<a href="https://www.linkedin.com/in/anil-kumar-535799221/">
									<SiLinkedin size={25} />
								</a>
								<span className={SkillsStyles.tooltiptext}>Linkedin</span></div>
								
								<div className={SkillsStyles.tooltip}>
								<a href="mailto:kumaranilstps017@gmail.com">
									<SiGmail size={25} />
								</a>
								<span className={SkillsStyles.tooltiptext}>Mail</span></div>
					</div>
					<h1>All rights reserved</h1>
				</div>
			</footer>
		</div>
	)
}

export default Home
