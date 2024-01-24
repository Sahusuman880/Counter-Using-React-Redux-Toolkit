import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterAction } from "../Store/counter";
import { privacyAction } from "../Store/privacy";

function Control() {
  const number = useRef();
  const dispatch = useDispatch();
  function handelIncrementByOne() {
    dispatch(counterAction.incrementByOne());
  }
  function handelDecrementByOne() {
    dispatch(counterAction.decrementByOne());
  }
  function handelIncrement() {
    let num = Number(number.current.value);
    number.current.value = "";
    dispatch(counterAction.increment(num));
  }
  function handelDecrement() {
    let num = Number(number.current.value);
    number.current.value = "";
    dispatch(counterAction.decrement(num));
  }
  function handelPrivacyToggle() {
    dispatch(privacyAction.toggle());
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
