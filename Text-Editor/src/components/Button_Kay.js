import { useState } from "react";
import classes from "./Kaybord.module.css";

function Button_Kay(props) {

      function onClickToUpdate() {
            switch (props.type) {
                  case "changeLanguege":
                        if (props.char === "עברית") {//להחליף לעברית
                              props.functions[1]("HebrewChars");
                        } else {//להחליף לאנגלית
                              if (props.UpOrLow_state === "Up") {//להחליף לאותיות גדולות
                                    props.functions[1]("EnglishUpperChars");
                                    props.functions[3]("Up");
                              } else if (props.UpOrLow_state === "Low") {//להחליף לאותיות קטנות
                                    props.functions[1]("EnglishLowerChars", "Low");
                                    props.functions[3]("Low");
                              }
                        }
                        break;
                  case "char":
                  case "specialChar":
                        props.functions[0](props.char)
                        break;
                  case "Del":
                        props.functions[0]("", "Del");
                        break;
                  case "Undo":
                        props.functions[0]("", "Undo");
                        break;
                  case "ChangeColor":
                        props.functions[2]();
                        break;
                  case "CapsLock":
                        if (props.lang !== "Hebrew") {
                              if (props.UpOrLow_state === "Up") {//להחליף לאותיות גדולות
                                    props.functions[1]("EnglishLowerChars");
                                    props.functions[3]("Low");
                              } else {//להחליף לאותיות קטנות
                                    props.functions[1]("EnglishUpperChars", "Low");
                              }
                        }
                        break;
                  default:
                        break;
            }
      }
      function checkClass() {
            switch (props.fclass) {
                  case "btn_char":
                        return classes.btn_char
                        break;
                  case "btn_space":
                        return classes.btn_space
                        break;
                  case "btn_specialChar":
                        return classes.btn_specialChar
                        break;
                  case "btn_StyleApply":
                        return classes.btn_StyleApply
                        break;
                  case "btn_apply":
                        return classes.btn_apply
                        break;
                  default:
                        break;
            }
      }
      return <button className={checkClass()} onClick={onClickToUpdate}> {props.char}</button>;
}
export default Button_Kay;
