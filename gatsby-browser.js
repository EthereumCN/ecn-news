import React from 'react'
import { ThemeProvider, ColorModeProvider, CSSReset } from "@chakra-ui/core"
import theme from "./theme/theme"

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
       {typeof window !== "undefined" &&
      window.localStorage.setItem("darkMode", false)}
      <ColorModeProvider>
        <CSSReset />
        {element}
      </ColorModeProvider>
    </ThemeProvider>
  )
}
