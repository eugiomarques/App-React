import React, { useState } from 'react';
import logo from "./assets/logoestacio.png";
import interrogacao from "./assets/interrogação.png";
import logoemail from "./assets/logoemail.png";
import ReCAPTCHA from "react-google-recaptcha";
import './App.css';

function App() {
  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('pt-BR', options);
  const firstLetterCapitalizedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

  const onChange = () => {};

  const [matricula, setMatricula] = useState('');
  const [password, setPassword] = useState('');

  const handleMatriculaChange = (event) => {
    setMatricula(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const isFormValid = () => {
    return matricula.trim() !== '' && password.trim() !== '';
  };

  return (
    <div className="container">
      <header className='header'>
        <img src={logo} alt='workflow' />
        <span>SIA - Sistema de Informações Acadêmicas</span>
        <span>{firstLetterCapitalizedDate}</span>
        <button className='button-header'>
          Entrar com e-mail estudante
          <img src={logoemail} alt="Email" />
        </button>
        <div class="ou">
            <p>OU</p>
        </div>
      </header>

      <form>
        <div className='inputcontainer'>
          <label htmlFor='matrícula'>Matrícula </label>
          <div className='iconmatricula'>
          <input type='text' name='matrícula' id='matrícula' placeholder='Digite sua matrícula' value={matricula} onChange={handleMatriculaChange} />
          </div>
        </div>
        <a className='a1' href='https://example.com' target="_blank" rel="noopener noreferrer">Não sei ou esqueci a matrícula</a>

        <div className='inputcontainer'>
          <label htmlFor='password'>Senha</label>
          <div className='iconpassword'>
          <input type='password' name='password' id='password' placeholder='Digite sua senha' value={password} onChange={handlePasswordChange} />
          </div>
        </div>
        <a className='a2' href='https://example.com' target="_blank" rel="noopener noreferrer">Esqueci minha senha / Cadastrar primeira senha</a>
        <ReCAPTCHA sitekey="6Lea2p8pAAAAAM5IIn8G7Y_RST4dfpz9S2EPtiZV" className='recaptcha' onChange={onChange}/>
        <button className='button' disabled={!isFormValid()}>Entrar</button>

        <div className='footer1'>
          <span>Alunos IDOMED, seu SIA mudou!</span>
          <span className='acesselink'>Acesse <a href="https://sia.idomed.com.br/sianet/logon" target="_blank" rel="noopener noreferrer">sia.isomed.com.br</a> e salve</span>
          <span>em seus favoritos.</span>
        </div>

        <div className='footer2'>
          <span>Está com dúvidas para fazer o login?</span>
          <a href="https://sia.estacio.br/sianet/Content/estacio/SiteNovo/dist/html/main-estacio.html" target="_blank" rel="noopener noreferrer"> <img src={interrogacao} alt="Ajuda" />Acessar Ajuda</a>
        </div>
      </form>
    </div>
  );
}

export default App;
