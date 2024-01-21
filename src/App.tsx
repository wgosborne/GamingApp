import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App({}:GameQuery) {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery); //not null because we will always have a query object even if contents are null

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, //phone size
        lg: `"nav nav" "aside main"`, //desktop, wider than 1024px
      }}
      templateColumns={{
        base: "1fr", //one fraction, it will stretch to take up available space
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}/>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
            <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})} />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;

//Shows
//use for deciding on showing based on screen

//Template Areas
//determining layouts for different breakpoints
