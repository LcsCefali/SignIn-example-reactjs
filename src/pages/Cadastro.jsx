import React, { useState } from 'react';
import '../styles/cadastro.css';

function Cadastro() {
    const [nome, setNome] = useState('');
    const [curso, setCurso] = useState('');
    const [idade, setIdade] = useState('');
    const [formularioEnviado, setFormularioEnviado] = useState(false);

    function salvar(event) {
        event.preventDefault();

        setFormularioEnviado(true);
    }

    return (
        <div className="page-cadastro">
            {!formularioEnviado ? (
                <form className="conteudo-central" onSubmit={salvar}>
                    <label htmlFor="nome" className="conteudo-input">
                        Nome
                        <input 
                            type="text" 
                            name="nome" 
                            id="nome" 
                            onChange={(e) => setNome(e.target.value)}
                            value={nome}
                            required
                        />
                    </label>

                    <label htmlFor="curso" className="conteudo-input">
                        Curso
                        <input 
                            type="text" 
                            name="curso" 
                            id="curso"
                            onChange={(e) => setCurso(e.target.value)}
                            required
                        />
                    </label>

                    <label htmlFor="idade" className="conteudo-input">
                        Idade
                        <input 
                            type="number" 
                            min="0"
                            name="idade" 
                            id="idade"
                            onChange={(e) => setIdade(e.target.value)}
                            required
                        />
                    </label>

                    <button type="submit">
                        Salvar Cadastro
                    </button>
                </form>
            ) : (
                <div className="conteudo-central">
                    <h2>Parabéns! Seu cadastro foi realizado com sucesso.</h2>
                    <ul>
                        <li>Nome: {nome}</li>
                        <li>Curso: {curso}</li>
                        <li>Idade: {idade}</li>
                    </ul>

                    <button 
                        className="voltar" 
                        onClick={() => setFormularioEnviado(false)}
                    >
                        Voltar
                    </button>
                </div>
            )}
            
        </div>
    );
}

export default Cadastro;