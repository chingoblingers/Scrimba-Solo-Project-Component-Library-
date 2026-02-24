import { useState } from 'react'
import Badge from './components/Badge/Badge.jsx'
import Banner from './components/Banner/Banner.jsx'
import Card from './components/Card/Card.jsx'

function App() {
 

  return (
    <>
    <Badge color="red" shape="bomb"> Lady Gaga </Badge>
    <Banner title="Too bad" status="fail"> Your verification process succeded and you are now able to make a banner component </Banner>
    <Card title="Easy Development"> This is the begining of the best ever card that you will create ever. Dont miss out on this once in a lifetime chance! </Card>
    </>
  )
}

export default App
