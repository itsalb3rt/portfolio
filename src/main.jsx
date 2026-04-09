import React from "react"
import ReactDOM from "react-dom"
import IndexPage from "./pages/index"
import NotFoundPage from "./pages/404"

const App = () => {
  if (window.location.pathname === "/" || window.location.pathname === "") {
    return <IndexPage />
  }

  return <NotFoundPage />
}

ReactDOM.render(<App />, document.getElementById("root"))
