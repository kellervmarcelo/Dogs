import React from 'react'
import Feed from './Feed/Feed'
import Head from './Helper/Head'

const Home = () => {
    return (
        <section className="container mainContainer">
            <Head title="fotos" description="Home do site dogs"/>
            <Feed /> 
        </section>
    )
}

export default Home;
