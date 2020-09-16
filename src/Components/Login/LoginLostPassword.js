import React from 'react'
import useFetch from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm';
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import Error from '../Helper/Error'
import { PASSWORD_LOST } from '../../api';
import Head from '../Helper/Head';

const LoginLostPassword = () => {
    const login = useForm();
    const {data, loading, error, request} = useFetch();

    async function handleSubmit(event){
        event.preventDefault();
        const {url, options} = PASSWORD_LOST({login: login.value, url:window.location.href.replace('perdeu', 'resetar') })
        request(url, options)
    }

    return (
        <section className="animeLeft">
            <Head title='Perdeu a senha' />
            <h1 className='title'>Perdeu a senha?</h1>
            {data ? <p style={{color: '#4c1'}}>{data}</p> : <form onSubmit={handleSubmit}>
                <Input label="Email / Usuario" type="text" name="login" {...login}/>
                {loading ? <Button disabled>Enviando</Button> : <Button>Enviar Email</Button>}
                {error && <Error error={error} />}
            </form>}
            
        </section>
    )
}
export default LoginLostPassword;
