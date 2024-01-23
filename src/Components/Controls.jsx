import { useRef } from "react";
import { useDispatch } from "react-redux";

function Control() {
  const number = useRef();
  const dispatch = useDispatch();
  function handelIncrementByOne() {
    dispatch({ type: "INCREMENT_BY_ONE" });
  }
  function handelDecrementByOne() {
    dispatch({ type: "DECREMENT_BY_ONE" });
  }
  function handelIncrement() {
    let num = Number(number.current.value);
    number.current.value = "";
    dispatch({ type: "INCREMENT", payload: num });
  }
  function handelDecrement() {
    let num = Number(number.current.value);
    number.current.value = "";
    dispatch({ type: "DECREMENT", payload: num });
  }
  function handelPrivacyToggle() {
    dispatch({ type: "PRIVACY TOGGLE" });
  }
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          class="btn btn-primary"
          onClick={handelIncrementByOne}
        >
          +1
        </button>

        <button
          type="button"
          class="btn btn-success"
          onClick={handelDecrementByOne}
        >
          -1
        </button>
        <button
          type="button"
          class="btn btn-warning"
          onClick={handelPrivacyToggle}
        >
          Privacy Toggle
        </button>

        {/* <button type="button" class="btn btn-danger">
        Danger
      </button>
      <button type="button" class="btn btn-warning">
        Warning
      </button>
      <button type="button" class="btn btn-info">
        Info
      </button>
      <button type="button" class="btn btn-light">
        Light
      </button>
      <button type="button" class="btn btn-dark">
        Dark
      </button> */}
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <div>
          <input type="number" ref={number} placeholder="Enter Number" />
        </div>

        <button type="button" class="btn btn-info" onClick={handelIncrement}>
          Add
        </button>
        <button type="button" class="btn btn-danger" onClick={handelDecrement}>
          Sub
        </button>
        {/* <button type="button" class="btn btn-dark">
        Dark
      </button> */}
      </div>
    </>
  );
}
export default Control;
