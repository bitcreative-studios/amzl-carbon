/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react'
import './Sidebar.scss'
import { Button } from 'carbon-components-react'
import NavigationTabs from '../../components/NavigationTabs'

const Sidebar = () => {
  return (
    <div className="App">
      <NavigationTabs />
    </div>
  )
}

export default Sidebar
