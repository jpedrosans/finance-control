import { useState } from "react"
import './Login.css'

function Login () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="field">
                    <input 
                        type="email"
                        placeholder="digite seu email"
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="field">
                    <input 
                        type="password"
                        placeholder="digite sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div> 

                <button>Entrar</button>

                <div className="options">
                    <label className="checkbox-label">
                        <input 
                            type="checkbox" 
                        />
                        <span> Lembrar de mim </span>
                     </label>
                <a href="#"className="forgot-link">Esqueceu sua senha?</a>
            </div>
            <div className="divider">
                <span>ou</span>
            </div>
            <div className="signup-box">
                <span>Não tem uma conta?</span>
                <a href="./Register">Criar uma conta</a>
            </div>
        </div>
     </div>
 )
}

export default Login