import City from "./cityColor/index.js";
import Form from "./form/index.js";
import FormArray from "./formArray/index.js";
import "./App.css";

function App() {
  return (
    <div>
      {/* color and city useState */}
      <City />
      {/* form submittedData */}
      <Form />
      {/* form with array */}
      <FormArray />
    </div>
  );
}

export default App;
