import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MemberCard from './Components/TeamMemberCard'
import { team } from './Data/Data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> hello sekhar</h1>
      {
        team.map(member => {
          return <MemberCard name={member.name} role={member.role} image={member.image} />
        })
      }

      <footer>
        <p>
          endi ra chestunnav <br />
          <a href="google">go to google</a><br />
          <a href="instagram">my instagram</a>
        </p>
      </footer>
    </>
  )
}

export default App
