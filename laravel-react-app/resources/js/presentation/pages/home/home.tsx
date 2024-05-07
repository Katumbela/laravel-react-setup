import React, { useState, useEffect } from "react";
import axios from "axios";

export type Article = {
    id: number;
    titulo: string;
    post: string;
    created_at: string;
    updated_at: string;
};

export function HomePage() {
    const laravel =
        "data:image/jpeg;base64,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";
    const reactImage =
        "data:image/png;base64,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";

    const [datas, setDatas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                "http://localhost:8000/list-articles"
            );
            console.log(response.data); // Ou faça algo com os dados da resposta aqui
            setDatas(response.data);
        };

        fetchData(); // Chame a função fetchData para buscar os dados
    }, []);

    return (
        <>
            <div className="mx-auto text-center ">
                <br />
                <center className="flex justify-center gap-6 mt-32">
                    <img src={laravel} alt="" />
                    <span className="my-auto text-6xl">+</span>
                    <img src={reactImage} alt="" />
                </center>

                <br />
                <h1 className="text-2xl text-cyan-600">Home page component</h1>
                <br />
                <a href="/about" className="text-xl underline">
                    about page
                </a>
            </div>
            <br />
            <div className="text-center">
                {datas.map((e) => (
                    <li key={e.titulo}>{e.titulo}</li>
                ))}
            </div>
        </>
    );
}
