import { useState } from 'react'
import Badge from './components/Badge/Badge.jsx'
import Banner from './components/Banner/Banner.jsx'

function App() {
 

  return (
    <>
    <Badge color="red" shape="bomb"> Lady Gaga </Badge>
    <Banner title="Congratulations" status="Success"> Your verification process succeded and you are now able to make a banner component </Banner>
    </>
  )
}

export default App
