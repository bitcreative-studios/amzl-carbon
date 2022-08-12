import { css, Global } from '@emotion/react'
import React, { ReactNode } from 'react'

const carbonSystem = css`
  @use '@carbon/styles';
`

const GlobalStyles = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Global styles={carbonSystem} />
      {children}
    </>
  )
}

export default GlobalStyles
