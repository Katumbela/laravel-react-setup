import React from "react";
import { Link } from "react-router-dom";

export function AboutPage() {
    return (
        <>
            <div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <center>
                    <h1 className="text-5xl font-semibold">
                        This is the about page{" "}
                    </h1>
                    <br />
                    <h1 className="text-2xl">About page component</h1>
                    <Link to="/" className="text-2xl underline text-cyan-600">
                        {" "}
                        Home Page
                    </Link>
                </center>
            </div>
        </>
    );
}
