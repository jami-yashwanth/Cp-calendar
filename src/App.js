import { BrowserRouter as Router,Route } from "react-router-dom"
import Homepage from "./Components/Homepage/Homepage";
import Info from "./Components/Info/Info";
import Navbar from "./Components/Navbar/Navbar";
import {useState} from 'react'
import {ThemeProvider , createGlobalStyle} from "styled-components";
import './App.css'

const GlobalStyle = createGlobalStyle`
body{
  background : ${props => props.theme.mode === 'dark' ? "linear-gradient(to right bottom,#03071E,#001524)" : 'linear-gradient(to right bottom,#F0EFEB,#FFFCF2)'};
  background-attachment : fixed;
  color : ${props => props.theme.mode === 'dark' ? "#fff" : "#0d3b66"};
}
`


function App() {
  const [theme,setTheme] = useState('dark');

  const ToggleTheme = () => {
   (theme === 'dark') ? setTheme('light') : setTheme('dark'); 
  }

  return (
    <ThemeProvider theme={{mode : theme}}>
      <>
      <GlobalStyle />
    <div className="App">
      <Router>
      <Navbar theme={theme} ToggleTheme={ToggleTheme}/>
      <Route path='/' exact render={() => <Homepage theme={theme} />} />
      <Route path='/api/all' render={() => <Info theme={theme} />} />
      <Route path ='/api/codeforces' render={() => <Info theme={theme} />} />       
      <Route path ='/api/codechef' render={() => <Info theme={theme} />} />
      <Route path ='/api/atcoder' render={() => <Info theme={theme} />} />
      <Route path ='/api/leetcode' render={() => <Info theme={theme} />} />
      <Route path ='/api/hackerearth' render={() => <Info theme={theme} />} />
      <Route path ='/api/hackerrank' render={() => <Info theme={theme} />} />
      <Route path ='/api/google' render={() => <Info theme={theme} />} />
      <Route path ='/api/topcoder' render={() => <Info theme={theme} />} />
      </Router>
    </div>
      </>
    </ThemeProvider>
  );
}

export default App;
