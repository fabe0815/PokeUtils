import React from "react";
import { CssBaseline, Button } from "@material-ui/core";
import { Public } from "@material-ui/icons";

const App: React.FC = () => (
  <React.Fragment>
    <CssBaseline />
    <Button variant="contained">Hello &nbsp; <Public /></Button>
  </React.Fragment>
);

export default App;
