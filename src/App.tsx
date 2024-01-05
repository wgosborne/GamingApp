import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, //phone size
        lg: `"nav nav" "aside main"`, //desktop, wider than 1024px
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
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
