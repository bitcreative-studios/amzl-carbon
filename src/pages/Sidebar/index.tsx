import React from 'react'
import { render } from 'react-dom'

import Sidebar from './Sidebar'
import '../../styles/index.scss'
// import '@carbon/charts/styles.css'

render(<Sidebar />, window.document.querySelector('#sidebar-panel'))

if (module.hot) {
  module.hot.accept()
}
