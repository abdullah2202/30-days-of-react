import React from 'react'
import ReactDOM from 'react-dom'
import avatarImage from './images/avatar.jpg'

const welcome = 'Welcome to 30 Days of React'
const title = 'Getting Started with React'
const subtitle = 'Javascript Library'
const author = {
  firstName: 'Ahmed',
  lastName: 'Ali',
}
const yearBorn = 1820
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)
const date = 'Jul 28, 2022'
const user = (
  <div className='avatar-card'>
    <img src={avatarImage} alt='Avatar Image' className='avatar-image'/>
    <div className='avatar-name'><span>{author.firstName} {author.lastName}</span></div>
    <div className='avatar-age'><span>{age}</span></div>
  </div>
)

const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3> 
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)

const Header = () => {
  return header
}

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)



const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)

const Main = () => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>
        {techsFormatted}
      </ul>
      {result}
      {personAge}
      {user}
    </div>
  </main>
)

const copyRight = 'Copyright 2022'

const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>  
    </div>
  </footer>
)


const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for(let i=0; i<6; i++){
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

let hexa_color = hexaColor()

const hexaStyles = {
  width: 100,
  height: 100,
  background: hexa_color,
  padding: 10,
  fontWeight: 'bold',
}

const HexaColor = () => <div style={hexaStyles}>{hexa_color}</div>


const App = () => (
  <div className='app'>
    <HexaColor />
    <Header />
    <Main />
    <Footer />
    
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

