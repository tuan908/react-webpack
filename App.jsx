import React, { Suspense } from "react";
import { Person } from "./src/components/Person";
import { createResource } from "./src/components/PersonApi";

const resource = createResource();

const App = () => {
  return (
    <div>
      <Suspense fallback={<h1>Loading content...</h1>}>
        <Person resource={resource} />
      </Suspense>
    </div>
  );
};

export default App;
