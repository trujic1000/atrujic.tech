import React from "react"

import "typeface-raleway"
import "core-js/modules/es6.set"
import "core-js/modules/es6.map"

import { MenuProvider } from "./src/state/menu"

export const onServiceWorkerUpdateReady = () => window.location.reload(true)

export const wrapRootElement = ({ element }) => (
  <MenuProvider>{element}</MenuProvider>
)
