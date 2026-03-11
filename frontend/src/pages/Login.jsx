import { useState } from "react"

function Login () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div><label>Email
            <input type="email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)}/>
        </label><br />
        <label>Senha
            <input type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
        </label><br />
        <button>Entrar</button><br />
        <label>
            <input type="checkbox" />
        </label>Lembrar de mim<br />
        <a href="">Esqueceu sua senha?</a>
        </div>
)
}

export default Login