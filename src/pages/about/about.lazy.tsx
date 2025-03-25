// import * as React from 'react'
import {createLazyFileRoute} from '@tanstack/react-router'

export const Route = createLazyFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className="p-2">
      <h3>Скоро тут что то появится</h3>
      {/*<Link to='/todo' style={{border: '2px'}}>Ha todo</Link>*/}
      {/*<Login/>*/}

    </div>
  )
}
