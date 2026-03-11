import { useState } from "react"


function Login () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div><label>Email
            <input type="text"
            value={email} 
            onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <label>Senha
            <input type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <button>Entrar</button>
        <label>Lembrar de mim
            <input type="checkbox" />
        </label>
        <a href="">Esqueceu sua senha?</a>
        </div>
)
}

export default Login