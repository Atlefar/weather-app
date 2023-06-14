import { Fragment } from "react";
import Header from "./components/layout/Header";
import SearchBar from "./components/UI/SearchBar";
import Main from "./components/layout/Main";

const App = () => {
  return (
    <Fragment>
      <Header />
      <SearchBar />
      <Main />
    </Fragment>
  );
}

export default App;
