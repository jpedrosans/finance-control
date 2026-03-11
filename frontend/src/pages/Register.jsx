import { useState } from "react"

function Register () {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [confirmEmail, setConfirmEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [dateBirth, setDateBirth] = useState("")
    
    return (
        <div>
            <label>Nome Completo
                <input type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}/>
            </label><br />
            <label>Email
                <input type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            </label><br />   
            <label>Confirmar o Email
                <input type="email"
                value={confirmEmail}
                onChange={(e) => setConfirmEmail(e.target.value)}/>
            </label><br />
            <label>Senha
                <input type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            </label><br />                
            <label>Confirmar Senha
                <input type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}/>
            </label><br /> 
            <label>Data de Nascimento
                <input type="date"
                value={dateBirth}
                onChange={(e) => setDateBirth(e.target.value)}/>
            </label><br /> 
            <label>Gênero <br />
                <input type="radio" name="genero" value="masculino"/> Masculino
                <input type="radio" name="genero" value="feminino" /> Feminino
                <input type="radio" name="genero" value="outro" /> Outro
            </label><br />
            <input type="checkbox" />            
            <label> Eu concordo com os termos de uso.
            </label><br />
            <button>Cadastrar</button><br /> 
            <a href="">Já tem conta? Entrar?</a>       
        </div>
    ) 
}

export default Register