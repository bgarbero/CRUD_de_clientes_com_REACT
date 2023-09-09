import { useState } from 'react';
import Swal from 'sweetalert2'
import './index.css';

function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const logar = () =>{
        if (!email || !senha) {
            //caso esteja incorreto, mandar mensagem de usuário e senha inválida
            Swal.fire({
                icon: 'error',
                //title: 'Oops...',
                text: 'O campo de e-mail e senha são obrigatórios',
              })
            return;
        }
    };

    return (
        < div className="caixa-login" >

            {/* <!--Título da tela de login--> */}
            <div class="titulo-login">
                <h1>Client's CRUD</h1>
            </div>

            {/* <!--Descrição--> */}
            <div className="descricao">
                <h4>Organize sua carteira de clientes de forma intuitiva e descomplicada.</h4>
            </div>

            {/* <!--Grupo email--> */}
            <div className="grupo">
                <label for="email">E-mail</label><br />
                <input id="email" type="text" placeholder="exemplo@exemplo.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            {/* <!--Grupo senha--> */}
            <div className="grupo">
                <label for="senha">Senha</label><br />
                <input id="senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
            </div>

            <div className="uteis">
                {/* <!--Lembrar-me--> */}
                <div className="lembrar-me">
                    <input id="checkbox" type="checkbox" />
                    <a id="lembrar-me">Lembrar-me</a>
                </div>

                {/* <!--Link para recuperar senha--> */}
                <div className="esqueci-minha-senha">
                    <a href="#" id="esqueci-minha-senha">Esqueci minha senha</a>
                </div>
            </div>

            {/* <!--Botão--> */}
            <button id="btn-entrar" onClick={logar} type="submit">Entrar</button>

            {/* <image id="img-login" src="./assets/vendedor.jpg"></image> */}
        </div>
    )
}
export default Login;