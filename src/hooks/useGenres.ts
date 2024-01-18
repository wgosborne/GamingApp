import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { Game } from "./useGames";

interface Genre {
    id: number;
    name: string;
}

interface FetchGenresResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);

        apiClient
            .get<FetchGenresResponse>("/genres", { signal: controller.signal})
            .then((res) => {
                setGenres(res.data.results);
                setLoading(false); //this would usually be done in finally but finally doesnt work in TypeScript mode
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false); //this would usually be done in finally but finally doesnt work in TypeScript mode
            });

        return () => controller.abort();

    }, []);

    return { genres, error, isLoading };
}

export default useGenres;