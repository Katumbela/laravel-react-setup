// env.ts

interface EnvironmentConfig {
    apiUrl: string;
    apiKey: string;
    port: number;
}

const env: EnvironmentConfig = {
    apiUrl: "http://127.0.0.1:8000/api",
    apiKey: "your_api_key_here",
    port: 8000,
};

export default env;
