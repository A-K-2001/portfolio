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
				<title>Anil kumar</title>
				<meta name="description" content="Portfolio for Anil kumar" />
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
									{/* <SiGithub size={25} /> */}
								</a>
								<span className={SkillsStyles.tooltiptext}>GitHub</span></div>
							
								<div className={SkillsStyles.tooltip}>
								<a href="https://www.linkedin.com/in/anil-kumar-535799221/">
									<SiLinkedin size={25} />
								</a>
								<span className={SkillsStyles.tooltiptext}>Linkedin</span></div>
								<div className={SkillsStyles.tooltip}>
									<a href="https://github.com/A-K-2001">

									<SiGithub size={25}/><span className={SkillsStyles.tooltiptext}>GitHub
								</span>
									</a>
									
								</div>
								
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
								I&apos;m well versed in the technical domains of Web Development and AI/ML.
								<br />
								Currently I&apos;m an Undergraduate student at the <a href='https://www.iiitm.ac.in/index.php/en/'>Indian Institute of Information Technology, Gwalior</a> majoring in Computer Science and Engineering.
								<br />
								Feel free to reach out to me in case of any internship or job opportunites as well.
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


			<a id="experience"></a>
			<div>
				<div className="pt-28 md:mx-32 md:pt-44 flex flex-col items-center">
					<h1 className="text-5xl font-semibold mb-4">Experience</h1>
					<h1 className="text-2xl mb-4 text-green-400">My Work So Far</h1>
					<div className="flex flex-col ml-6">
						<div className="flex space-x-8 md:space-x-32 my-8">
							<div className="">
								<div className="inline-block h-8 w-20 rounded-full">
									<img className="rounded-full" src="https://www.scopex.money/images/logo_green.png" />
								</div>
								<div className="block w-1 h-full bg-green-400 ml-7"></div>
							</div>
							<div>
								<h1 className="text-2xl mb-4">Full Stack Web Developer Intern</h1>
								<h1 className="text-2xl mb-4 text-green-400">ScopeX, Cross-border financial services</h1>
								<div>
									<h1 className="flex space-x-4 items-center"><SlCalender /><div>March 2023 - Present</div></h1>
								</div>
							</div>
						</div>	
						<div className="flex space-x-8 md:space-x-32 my-8">
							<div className="">
								<div className="inline-block h-20 w-16 rounded-full">
									<img className=" rounded-full" src="data:image/jpeg;base64,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" />
								</div>
								<div className="block w-1 h-full bg-green-400 ml-7"></div>
							</div>
							<div>
								<h1 className="text-2xl mb-4">Machine Learning Research Intern</h1>
								<h1 className="text-2xl mb-4 text-green-400">IIITM gwalior</h1>
								<div>
									<h1 className="flex space-x-4 items-center"><SlCalender /><div>July 2022 - August 2022</div></h1>
								</div>
							</div>
						</div>	
					</div>
				</div>
			</div>


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
							Built a digital marketplace to bridge the gap between companies and investors using ReactJS, Redux, and tailwindcss.
							</p>
							<p className="">
							Developed real-time chat functionality with Socket.IO, reducing latency and enhancing user communication.
							</p>
							<p className="">
							Developed a robust backend using NodeJS and ExpressJS, ensuring efficient data handling.
							</p>
							<p className="">
							Utilized Firebase for image storage and MongoDB for data persistence, streamlining data management.
							</p>
							<div>
								<a className="bg-green-500 text-white p-4 flex w-18 text-1xl rounded-xl font-semibold mt-4" href="https://letsgroww.vercel.app/">View</a>
							</div>
						</div>


						<div className="flex flex-col items-center py-10 px-10 mx-4 shadow-sm shadow-green-400 rounded-xl space-y-4">
							<h1 className="text-3xl font-semibold pb-4">VehiChain</h1>
							{/* <div className="flex space-x-2 items-center justify-center">
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
							</div> */}
							<p className="">
							Developed a decentralized vehicle management system using Solidity smart contracts and IPFS; reduced on-chain data by 40\% and enabled seamless tracking of vehicles from manufacturing to sale.
							</p>
							<p className="">
							Made a single-page interface as an application interface using ReactJS and MaterialUI and optimized it up to 85\%.
							</p>
							<p className="">
							Displayed on-chain modification and captured P2P blockchain transactions.
							</p>
							<p className="">
							Tech Stack: Solidity, Web 3.0, IPFS, ReactJS, Material UI.
							</p>
							<div>
								<a className="bg-green-500 text-white p-4 flex w-18 text-1xl rounded-xl font-semibold mt-4" href="https://github.com/A-K-2001/VehiChain">View</a>
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
								<a className="bg-green-500 text-white p-4 flex w-18 text-1xl rounded-xl font-semibold mt-4" href="https://github.com/A-K-2001/portfolio">View</a>
							</div>
						</div>
					</div>
					<a className="bg-green-500 text-white p-4 flex w-36 text-1xl rounded-xl justify-around font-semibold mt-12" href="https://github.com/A-K-2001">View All</a>
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
