import React from 'react'
import ReactDOM from 'react-dom'
import avatarImage from './images/avatar.jpg'

const welcome = 'Welcome to 30 Days of React'
const title = 'Getting Started with React'
const subtitle = 'Javascript Library'
const author = {
  firstName: 'Mohammed',
  lastName: 'Abdullah',
}
const date = 'Jul 28, 2022'
const user = (
  <div>
    <img src={avatarImage} alt='Avatar Image' width='200px' />
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

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1820
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)

const main = (
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

const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>  
    </div>
  </footer>
)

const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(app, rootElement)

