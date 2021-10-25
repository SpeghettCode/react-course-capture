// import pages
import Nav from './component/Nav';
import AboutUs from "./pages/AboutUs";
//global style
import GlobalStyle from "./component/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
