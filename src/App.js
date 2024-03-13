import './App.css';
// import quiz from './data.json'
import Quiz from './component/quiz'
import NavBar from './component/NavBar';
import {
  Routes,
  Route,
} from "react-router-dom";
import About from './component/About';
import Home from './component/Home';


function App() {

  //to check
  // const check = ()=>{
  //   console.log(quiz.length)
    // quiz.forEach(element => {
    //   console.log(element)
    // });
  // }


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element = {<Home key ="home"/>}></Route>
          <Route path="/about" element ={<About />}></Route>
           {/* key ="webdevelopment" category="Web Development" */}
          <Route path="/webdevelopment" element ={<Quiz key='webdevlopment' category='Web Development' />} exact></Route>
          <Route path="/computernetworks" element ={<Quiz key='computernetwork' category='Computer Network' />} exact></Route>
          <Route path="/operatingsystem" element ={<Quiz key='operatingsystem' category='Operating System' />} exact></Route>
      </Routes>
    </div>
  );
}

export default App;
