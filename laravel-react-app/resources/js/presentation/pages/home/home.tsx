import React, { useState, useEffect } from "react";
import axios from "axios";
import env from "../../../infra/env";
import axiosWithAutoToken from "../../../infra/adapters/axios-adapter";
import { logos } from "../../../utils/image-exporter";
import { Link } from "react-router-dom";
import { handleErrorResponse } from "../../../domain/errors/handle-errors";
import { AddArticle } from "../../compoents";

export type Article = {
    id: number;
    titulo: string;
    post: string;
    created_at: string;
    updated_at: string;
};

export function HomePage() {
    const [datas, setDatas] = useState<Article[]>([]);
    const [update, setShouldUpdate] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(env.apiUrl + "/list-articles");
            console.log(response.data); // Ou faça algo com os dados da resposta aqui
            setDatas(response.data);
        };
        fetchData(); // Chame a função fetchData para buscar os dados
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fazendo login e armazenando o token
                // const token = await loginAndStoreToken(env.apiUrl + "/login", { email: 'seuemail', password: 'suasenha' });

                // Usando o token para fazer a requisição com o adapter axiosWithToken
                const response = await axiosWithAutoToken(
                    env.apiUrl + "/list-articles"
                );
                console.log(response); // Ou faça algo com os dados da resposta aqui
                setDatas(response.data);
            } catch (error) {
                console.error("Erro:", error);
                // Tratar erros aqui

                handleErrorResponse(error);
            }
        };

        fetchData(); // Chame a função fetchData para buscar os dados
    }, [update]);

    return (
        <>
            <div className="mx-auto text-center ">
                <br />
                <center className="flex justify-center gap-6 mt-32">
                    <img src={logos.laravel} alt="" />
                    <span className="my-auto text-6xl">+</span>
                    <img src={logos.reactImage} alt="" />
                </center>
                <br />
                <h1 className="text-2xl text-cyan-600">Home page component</h1>
                <br />
                <div className="flex justify-center gap-4 mb-7">
                    <Link to="/about" className="my-auto text-xl underline">
                        about page
                    </Link>{" "}
                    <Link to="/login" className="my-auto text-xl underline">
                        Login
                    </Link>{" "}
                    <span className="px-3 py-1 text-xl border cursor-pointer border-sky-600 text-sky-600 ">
                        Logout
                    </span>{" "}
                </div>
                <h1>Adicione um artigo </h1>
                <AddArticle setUpdate={setShouldUpdate} up={update} />
            </div>
            <br />
            <div className="text-center">
                {datas
                    .slice()
                    .reverse()
                    .map((e) => (
                        <li key={e.titulo}>{e.titulo}</li>
                    ))}
            </div>
        </>
    );
}
