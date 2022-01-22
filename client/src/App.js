import { BrowserRouter as Router,Route } from "react-router-dom"
import Homepage from "./Components/Homepage/Homepage";
import Info from "./Components/Info/Info";
import Login from "./Components/Login/login"
import {useState} from 'react'
import {ThemeProvider , createGlobalStyle} from "styled-components";
import Register from "./Components/Register/Register";

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
      <Route path='/' exact render={() => <Login theme={theme} />} />
      <Route path='/register' exact render={() => <Register theme={theme} />} />
      <Route path='/home' exact render={() => <Homepage theme={theme} ToggleTheme={ToggleTheme} />} />
      <Route path='/api/all' render={() => <Info theme={theme} ToggleTheme={ToggleTheme}/>} />
      <Route path ='/api/codeforces' render={() => <Info theme={theme} ToggleTheme={ToggleTheme}/>} />       
      <Route path ='/api/codechef' render={() => <Info theme={theme} ToggleTheme={ToggleTheme}/>} />
      <Route path ='/api/atcoder' render={() => <Info theme={theme} ToggleTheme={ToggleTheme}/>} />
      <Route path ='/api/leetcode' render={() => <Info theme={theme} ToggleTheme={ToggleTheme}/>} />
      <Route path ='/api/hackerearth' render={() => <Info theme={theme} ToggleTheme={ToggleTheme}/>} />
      <Route path ='/api/hackerrank' render={() => <Info theme={theme} ToggleTheme={ToggleTheme}/>} />
      <Route path ='/api/google' render={() => <Info theme={theme} ToggleTheme={ToggleTheme}/>} />
      <Route path ='/api/topcoder' render={() => <Info theme={theme} ToggleTheme={ToggleTheme}/>} />
      </Router>
    </div>
      </>
    </ThemeProvider>
  );
}

export default App;
