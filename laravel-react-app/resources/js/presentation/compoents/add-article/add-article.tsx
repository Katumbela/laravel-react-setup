import React, { useState } from "react";
import axiosWithAutoToken from "../../../infra/adapters/axios-adapter";
import env from "../../../infra/env";
import { handleErrorResponse } from "../../../domain/errors/handle-errors";
import toast from "react-hot-toast";

interface ARProps {
    setUpdate: (state: boolean) => void;
    up: boolean
}

export const AddArticle = ({ setUpdate, up }: ARProps) => {
    const [titulo, setTitle] = useState("");
    const [post, setPost] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const response = await axiosWithAutoToken.post(
                env.apiUrl + "/add-articles",
                { titulo, post }
            );
            console.log(response.data);
            toast.success(response.data.success);
            setUpdate(!up)
            setTitle("");
            setPost("");
        } catch (error) {}
    };

    return (
        <div>
            <h2>Adicionar Artigo</h2>
            {error && <div>{error}</div>}
            {success && <div>Artigo cadastrado com sucesso!</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Título:</label>
                    <input
                        className="my-3 border-2 ms-2"
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label>Post:</label>
                    <textarea
                        className="my-3 border-2 ms-2"
                        value={post}
                        onChange={(e) => setPost(e.target.value)}
                    ></textarea>
                </div>
                <button
                    className="px-3 py-2 border-2 border-sky-600 text-sky-600"
                    type="submit"
                >
                    Cadastrar
                </button>
            </form>
        </div>
    );
};
