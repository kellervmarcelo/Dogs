import React from 'react'
import { useParams } from 'react-router-dom'
import Feed from '../Feed/Feed'
import Head from '../Helper/Head'


const UserProfile = () => {
    const {user} = useParams()
    return (
        <section>
            <Head title={user} description='Perfil do usuário' />
            <h1 className="container title mainSection">{user}</h1>
            <Feed user={user} />
        </section>
    )
}

export default UserProfile
