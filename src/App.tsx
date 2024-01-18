import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, //phone size
        lg: `"nav nav" "aside main"`, //desktop, wider than 1024px
      }}
      templateColumns={{
        base: '1fr', //one fraction, it will stretch to take up available space
        lg: '200px 1fr'
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;

//Shows
//use for deciding on showing based on screen

//Template Areas
//determining layouts for different breakpoints
