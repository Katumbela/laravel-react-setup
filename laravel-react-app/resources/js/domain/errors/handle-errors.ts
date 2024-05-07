import { toast } from "react-hot-toast";

export const handleErrorResponse = (error) => {
    if (error) {
        console.log(error.data);
        // O servidor retornou um status de erro (404, 500, etc.)
        const status = error.data.status;
        const msg = error.data.message;
        /*if (status === 200 && msg !== 'Invalid login details') {
            // Tratar erro de não autorizado
            toast.success("Operação realizada com sucesso!");
        } else {*/
        console.log(error.data);
        console.log(error.data.status);
        console.log(error.data.message);
        // A requisição foi feita, mas não houve resposta do servidor

        if (msg === "User logged in successfully") {
            toast.success(error.data.message);
        } else {
            toast.error(error.data.message);
        }
        //}
    }
};
