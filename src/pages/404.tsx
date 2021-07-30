import * as React from "react"
import { Link } from "gatsby"

const NotFoundPage = (): JSX.Element => {
  return (
    <main>
      <title>404</title>
      <h1>Page not found  :(</h1>
      <Link to="/">Go home please</Link>.
    </main>
  );
};

export default NotFoundPage
