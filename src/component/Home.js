import React from 'react'
import { Link } from 'react-router-dom'
import cnImage from '../images/cnbg.jpg';
import osImage from '../images/osbg.jpg';
import webImage from '../images/webbg.jpg'


const Home = () => {
  return (
    <div className="container">
        <h1>QuizQuest - Test Your Knowledge!</h1>
        <p>Welcome to Quizzy, the ultimate destination for challenging quizzes. Select a category and embark on a
            journey of learning and fun!</p>
        <div className="category-cards">
            <div className="category-card">
                <img className="category-image" src={webImage} alt="WebDevelopment"/>
                <div className="category-info">
                    <button className="category-button"><Link className="nav-link" to="/webdevelopment"><b>Web Developement</b></Link></button>
                </div>
            </div>
            <div className="category-card">
                <img className="category-image" src={cnImage} alt="Omputer Network"/>
                <div className="category-info">
                    <button className="category-button"><Link className="nav-link" to="/computernetworks"><b>Computer Networks</b></Link></button>
                </div>
            </div>
            <div className="category-card">
                <img className="category-image" src={osImage} alt="Operating System"/>
                <div className="category-info">
                    <button className="category-button"><Link className="nav-link" to="/operatingsystem"><b>Operating System</b></Link></button>
                </div>
            </div>
            {/* <!-- Add more cards for different categories --> */}
        </div>
    </div>

  )
}

export default Home
