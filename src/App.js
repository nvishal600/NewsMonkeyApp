import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  let pageSize = 6;
  let apiKey = '4fc0853a916e412190cbf44f5b6f8360';
  //apiKey = process.env.REACT_NEWS_API //not working

  const [progress, setProgress] = useState(0);

    return (
      <>
      <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        />
        <Routes>  
          <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} category="general" country="in"/>}></Route>
          <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} category="business" country="in"/>}></Route>
          <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} category="entertainment" country="in"/>}></Route>
          <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} category="health" country="in"/>}></Route>
          <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} category="science" country="in"/>}></Route>
          <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} category="sports" country="in"/>}></Route>
          <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} category="technology" country="in"/>}></Route>
          {/* <News pageSize={5} category="health" country="in"/> */}
        </Routes>
      </Router>
      </>
    )
}

export default App;

