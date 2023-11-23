import Button_Kay from "./Button_Kay";
import { useState } from "react";

function Kays(props) {
      let functions = [props.updating, props.onLengugeUpdate, props.changeColor, props.setUpOrLow_state];
      if (props.type === "chars") {
            return (
                  <div className={props.KaysClass}>
                        {props.charsButtons.map((kay) => <Button_Kay char={kay.char} functions={functions} type={kay.type} fclass={kay.class} UpOrLow_state={props.UpOrLow_state} lang={props.lang} />)}
                  </div>
            )
      } else if (props.type === "options") {
            return (
                  <div className={props.KaysClass}>
                        {props.optionsButtons.map((kay) => <Button_Kay char={kay.char} functions={functions} type={kay.type} fclass={kay.class} UpOrLow_state={props.UpOrLow_state} lang={props.lang} />)}
                  </div>
            )
      }
}
export default Kays;
