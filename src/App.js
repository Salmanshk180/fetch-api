import React, { Fragment } from "react";
import Form from "./components/Form";
import Card from "./components/Card";
import Todos from "./components/Todos";

const App = () => {
  return (
    <Fragment>
      <Card>
        <Form></Form>
      </Card>
      <Card>
        <Todos/>
      </Card>
    </Fragment>
  );
};

export default App;
