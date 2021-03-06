// import React, { useState, useEffect } from 'react'
import React from 'react'
// import axios from 'axios'
import './styles.css'
import Footer from '../../Components/Footer'
import Programando from '../../assets/programando.svg'
import Header from '../../Components/Header'
import Links from '../../Components/Links'
const Home = () => {
    // const [githubInfo, setGithubInfo] = useState('')
    // useEffect(() => {
    //     axios.get("https://api.github.com/users/jpbrab0").then(res => {
    //         setGithubInfo(res.data)
    //     })
    // }, [])
    return(
        <>
            <Header title="João Pedro"/>
            <main>
                <section className="about-me">
                    <section className="description">
                        <div>
                            <h1>About me</h1>
                            <p>Hello, my name is João Pedro, 
                            <br />
                            I live in Campo Limpo Paulista,São Paulo I've been programming since I was 10 years old and my first learned programming language was Python 3
                            <br />
                            Currently I'm 14 years old and web developer with this technologies: Javascript, Golang, Php, PostgreSQL, Node.js and Elixir</p>
                        </div>
                        <div className="img">
                            <img src="https://github.com/jpbrab0.png" draggable={false}/>
                        </div>
                    </section>
                </section>
                <Links />
                <section className="languages">
                    <div className="img">
                        <img src={Programando} alt="Jp programando"/>
                    </div>
                    <div className="description">
                        <h1>Languages</h1>
                        <p>
                            <img src="https://img.shields.io/badge/python%20-%2314354C.svg?&style=for-the-badge&logo=python&logoColor=white"/>
                            <img src="https://img.shields.io/badge/golang%20-%23121011.svg?&style=for-the-badge&logo=go&logoColor=%0000ff" alt="Golang"/>
                            <img src="https://img.shields.io/badge/php%20-%23121011.svg?&style=for-the-badge&logo=php&logoColor=%0000ff" alt="Php"/>
                            <img src="https://img.shields.io/badge/javascript%20-%23121011.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="Javascript"/>
                            <img src="https://img.shields.io/badge/elixir%20-%23000000.svg?&style=for-the-badge&logo=elixir&logoColor=D133FF" alt="Elixir"/>
                        </p>
                        <h1>Frameworks/Libraries</h1>
                        <p>
                            <img src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJs"/>
                            <img src="https://img.shields.io/badge/Vue.js%20-%2343853D.svg?&style=for-the-badge&logo=vue.js&logoColor=%000000" alt="VueJs"/>
                        </p>
                        <h1>Technologies</h1>
                        <p>
                            <img src="https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white" alt="Git"/>
                            <img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
                            <img src="https://img.shields.io/badge/PostgreSQL%20-%23121011.svg?&style=for-the-badge&logo=postgresql&logoColor=%0000ff" alt="PostgreSQL"/>
                            <img src="https://img.shields.io/badge/LINUX%20-%23121011.svg?&style=for-the-badge&logo=linux&logoColor=%000000" alt="Linux"/>
                            <img src="https://img.shields.io/badge/vercel%20-%23000000.svg?&style=for-the-badge&logo=vercel&logoColor=white"/>
                            <img src="https://img.shields.io/badge/docker%20-%230db7ed.svg?&style=for-the-badge&logo=docker&logoColor=white"/>
                        </p>
                    </div>
                </section>
            </main>
            <Footer position={false}/>
        </>
    )
}
export default Home