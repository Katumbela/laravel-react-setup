import axios from "axios";
import { toast } from "react-hot-toast";
import env from "../infra/env";

export const logout = async () => {
    try {
        // Fazer a chamada para a rota de logout na API
        const res = await axios.get(env.apiUrl + "/logout");

        // Limpar o token do armazenamento (localStorage, sessionStorage, etc.)
        localStorage.removeItem("token");
        console.log(res);
        // Exibir mensagem de sucesso
        toast.success("Logout realizado com sucesso!");

        // Redirecionar o usuário para a página de login ou outra página desejada
        // history.push('/login');
    } catch (error) {
        // Lidar com erros de logout
        console.error("Erro ao fazer logout:", error);

        // Exibir mensagem de erro
        toast.error(
            "Erro ao fazer logout. Por favor, tente novamente mais tarde."
        );
    }
};

