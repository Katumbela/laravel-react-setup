import React, { useState } from "react";
import env from "../../../infra/env";
import loginAndStoreToken from "../../../services/login-service";
import { handleErrorResponse } from "../../../domain/errors/handle-errors";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [suc, setErrosetSuc] = useState("");

    const handleLogin = async () => {
        try {
            const token = await loginAndStoreToken(env.apiUrl + "/login", {
                email,
                password,
            });

            if (!token) {
                return;
            }
            setErrosetSuc("logado com sucesso!");
            setError("");
            // Se o login for bem-sucedido, redirecione o usuário ou faça qualquer outra ação necessária
            console.log("Token armazenado com sucesso:", token);
        } catch (error) {
            handleErrorResponse(error);

            setError(
                "Credenciais inválidas. Por favor, verifique seu e-mail e senha."
            );
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <div>{error}</div>}
            {suc && <div>{suc}</div>}
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label>Senha:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};
