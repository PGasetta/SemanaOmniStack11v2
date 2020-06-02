import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

export default function Logon(){
    const [ id, setId] = useState('');
    const [ senha, setSenha] = useState('');
    
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();
        try{
            const response = await api.post('session', { id, senha });
            const status = response.data.status;

            if(status == 200){
                localStorage.setItem('ongId',id);
                localStorage.setItem('ongName',response.data.message);
                history.push('/profile');
            }else{
                alert(response.data.message);
                history.push('/');
            }            
        }catch(e){
            alert(e);
            history.push('/');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input 
                        placeholder="Seu id"
                        value={id} 
                        onChange={e=> setId(e.target.value)}    
                    />
                    <input 
                        type="password" 
                        placeholder="Sua Senha"
                        value={senha} 
                        onChange={e=> setSenha(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>    
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}