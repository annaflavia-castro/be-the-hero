import React, {useState} from 'react';
import {FiLogIn} from 'react-icons/fi';
import {Link, useHistory} from 'react-router-dom';
import api from '../../services/api';
import './styles.css';
import logoImage from '../../assets/logo.svg';
import heroesImage from '../../assets/heroes.png';

export default function Login() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', {id});

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        } catch (err) {
            alert('Ocorreu um erro no login, tente novamente.');
        }
    }

    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImage} alt='Be The Hero'/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>

                    <input
                        placeholder='Seu ID'
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />

                    <button className='button' type='submit'>Entrar</button>

                    <Link className='back-link' to='/register'>
                        <FiLogIn size={16} color='#0CB6FF'/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImage} alt='Heroes'/>
        </div>
    );
};
