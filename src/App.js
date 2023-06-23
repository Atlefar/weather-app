import { Fragment } from "react";
import Heading from "./components/layout/Heading";
import SearchBar from "./components/UI/SearchBar";
import Main from "./components/layout/Main";

const App = () => {
  return (
    <Fragment>
      <SearchBar />
      <Heading />
      <Main />
    </Fragment>
  );
}

export default App;
