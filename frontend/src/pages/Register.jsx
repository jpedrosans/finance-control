import { useState } from "react"
import "./Register.css"

function Register() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [confirmEmail, setConfirmEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [dateBirth, setDateBirth] = useState("")

    return (
        <div className="register-container">
            <div className="register-box">

                <div className="field">
                    <input
                        type="text"
                        placeholder="digite seu nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

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
                        type="email"
                        placeholder="confirme seu email"
                        value={confirmEmail}
                        onChange={(e) => setConfirmEmail(e.target.value)}
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

                <div className="field">
                    <input
                        type="password"
                        placeholder="confirme sua senha"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                <div className="field">
                    <input
                        type="date"
                        value={dateBirth}
                        onChange={(e) => setDateBirth(e.target.value)}
                    />
                </div>

                <div className="gender-box">
                    <span>Gênero</span>

                    <div className="gender-options">
                        <label>
                            <input type="radio" name="genero" value="masculino" />
                            Masculino
                        </label>

                        <label>
                            <input type="radio" name="genero" value="feminino" />
                            Feminino
                        </label>

                        <label>
                            <input type="radio" name="genero" value="outro" />
                            Outro
                        </label>
                    </div>
                </div>

                <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Eu concordo com os termos de uso</span>
                </label>

                <button>Cadastrar</button>

                <div className="divider">
                    <span>ou</span>
                </div>

                <div className="signup-box">
                    <span>Já tem uma conta?</span>
                    <a href="./Login">Entrar</a>
                </div>

            </div>
        </div>
    )
}

export default Register