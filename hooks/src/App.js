import City from "./cityColor/index.js";
import Form from "./form/index.js";
import FormArray from "./formArray/index.js";
import UseEffect from "./useEffect/index.js";
import Reduce from "./reducer/reducer.js";
import NewRef from "./useRef/index.js";
import "./App.css";
import GeoLocation from "./geoLocation/index.js";
import RefFocus from "./useRef2/index.js";
import RefSaveValue from "./useRef3/index.js";
import Memo from "./useMemo/index.js";
import CallBack from "./useCallback/index.js";
import Memoization from "./memo/index.js";

function App() {
  // Comment all except one component then npm start
  return (
    <div>
      {/* color and city useState */}
      <City />
      {/* form submittedData */}
      <Form />
      {/* form with array */}
      <FormArray />
      {/* useEffect */}
      <UseEffect />
      <GeoLocation />
      {/* useReducer */}
      <Reduce />
      {/* useRef */}
      <NewRef />
      <RefFocus />
      <RefSaveValue />
      {/* useMemo */}
      {/* <Memo /> */}
      {/* useCallback */}
      {/* <CallBack /> */}
      {/* Memoization */}
      {/* <Memoization /> */}
    </div>
  );
}

export default App;
