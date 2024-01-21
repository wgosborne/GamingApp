import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform{
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform}[]
    metacritic: number;
    rating_top: number;
}


const useGames = (gameQuery: GameQuery) => 
    useData<Game>('/games', {
        params: { 
            genres: gameQuery.genre?.id, 
            platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText //this is adding it to the backend
        }}, 
        [gameQuery]); //anytime the object changes, it will refetch the data

export default useGames;