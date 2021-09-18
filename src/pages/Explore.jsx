import React from 'react';
import Page from '@components/Page'
import ButtonGrid from '@components/ButtonGrid'

function Explore() {
  // get from db?
  const filterTags = [
    "Finance",
    "Business",
    "Computer Science"
  ]
  const behaviorGenerator = (label) => (
    event => { console.log(`clicked ${label}`)}
  )

  return (
    <Page pageTitle="Explore">
      <ButtonGrid 
        labels={filterTags} 
        behaviorGenerator={behaviorGenerator}/>
    </Page>
  )
}

export default Explore