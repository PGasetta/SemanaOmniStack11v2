import React, { useState, Component } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg'
import { render } from '@testing-library/react';

export default function Register(){
    const [ name, setName] = useState('');
    const [ email, setEmail] = useState('');
    const [ whatsapp, setWhatsapp] = useState('');
    const [ city, setCidade] = useState('');
    const [ uf, setUf] = useState('');
    const [ site, setSite] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();
        const data ={
            name,
            email,
            whatsapp,
            city,
            uf,
            site
        };
        console.log(data);
        try{
            const response = await api.post('ongs',data);
            alert(`Seu ID de acesso: '${response.data.id}' e senha: '${response.data.senha}'.`);
            history.push('/');
        }catch (e){
            alert('Erro no cadastro, tente novamente!');
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>    
                        Voltar para Home
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome da ONG"
                        value={name} 
                        onChange={e=> setName(e.target.value)}
                    />
                    <input 
                        type="email" 
                        placeholder="E-mail"
                        value={email} 
                        onChange={e=> setEmail(e.target.value)}
                    />
                    <input 
                        placeholder="Whatsapp"
                        value={whatsapp} 
                        onChange={e=> setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                            placeholder="Cidade"
                            value={city} 
                            onChange={e=> setCidade(e.target.value)}
                        />
                        <input 
                            placeholder="UF" 
                            style={{ width:80, textTransform:"uppercase" }} 
                            maxLength="2"
                            value={uf} 
                            onChange={e=> setUf(e.target.value)}
                        />
                    </div>
                    <input 
                        placeholder="Site" 
                        value={site} 
                        onChange={e=> setSite(e.target.value)}
                    />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}