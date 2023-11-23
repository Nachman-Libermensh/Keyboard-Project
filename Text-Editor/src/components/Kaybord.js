import { useState } from "react";
import classes from "./Kaybord.module.css"
import Kays from "./Kays.js";

function Kaybord(props) {
      let EnglishUpperChars = [
            { char: 'A', type: "char", class: "btn_char" },
            { char: 'B', type: "char", class: "btn_char" },
            { char: 'C', type: "char", class: "btn_char" },
            { char: 'D', type: "char", class: "btn_char" },
            { char: 'E', type: "char", class: "btn_char" },
            { char: 'F', type: "char", class: "btn_char" },
            { char: 'G', type: "char", class: "btn_char" },
            { char: 'H', type: "char", class: "btn_char" },
            { char: 'I', type: "char", class: "btn_char" },
            { char: 'J', type: "char", class: "btn_char" },
            { char: 'K', type: "char", class: "btn_char" },
            { char: 'L', type: "char", class: "btn_char" },
            { char: 'M', type: "char", class: "btn_char" },
            { char: 'N', type: "char", class: "btn_char" },
            { char: 'O', type: "char", class: "btn_char" },
            { char: 'P', type: "char", class: "btn_char" },
            { char: 'Q', type: "char", class: "btn_char" },
            { char: 'R', type: "char", class: "btn_char" },
            { char: 'S', type: "char", class: "btn_char" },
            { char: 'T', type: "char", class: "btn_char" },
            { char: 'U', type: "char", class: "btn_char" },
            { char: 'V', type: "char", class: "btn_char" },
            { char: 'W', type: "char", class: "btn_char" },
            { char: 'X', type: "char", class: "btn_char" },
            { char: 'Y', type: "char", class: "btn_char" },
            { char: 'Z', type: "char", class: "btn_char" },
            { char: " ", type: "char", class: "btn_space" },
            { char: '.', type: "specialChar", class: "btn_specialChar" },
            { char: ',', type: "specialChar", class: "btn_specialChar" },
            { char: "עברית", type: "changeLanguege", class: "btn_apply" }
      ]
      let EnglishLowerChars = [];
      for (let index = 0; index < EnglishUpperChars.length; index++) {
            EnglishLowerChars.push({ "char": EnglishUpperChars[index].char.toLowerCase(), "type": EnglishUpperChars[index].type, "class": EnglishUpperChars[index].class })
      }
      let HebrewChars = [
            { char: 'א', type: "char", class: "btn_char" },
            { char: 'ב', type: "char", class: "btn_char" },
            { char: 'ג', type: "char", class: "btn_char" },
            { char: 'ד', type: "char", class: "btn_char" },
            { char: 'ה', type: "char", class: "btn_char" },
            { char: 'ו', type: "char", class: "btn_char" },
            { char: 'ז', type: "char", class: "btn_char" },
            { char: 'ח', type: "char", class: "btn_char" },
            { char: 'ט', type: "char", class: "btn_char" },
            { char: 'י', type: "char", class: "btn_char" },
            { char: 'כ', type: "char", class: "btn_char" },
            { char: 'ך', type: "char", class: "btn_char" },
            { char: 'ל', type: "char", class: "btn_char" },
            { char: 'מ', type: "char", class: "btn_char" },
            { char: 'ם', type: "char", class: "btn_char" },
            { char: 'נ', type: "char", class: "btn_char" },
            { char: 'ן', type: "char", class: "btn_char" },
            { char: 'ס', type: "char", class: "btn_char" },
            { char: 'ע', type: "char", class: "btn_char" },
            { char: 'פ', type: "char", class: "btn_char" },
            { char: 'ף', type: "char", class: "btn_char" },
            { char: 'צ', type: "char", class: "btn_char" },
            { char: 'ץ', type: "char", class: "btn_char" },
            { char: 'ק', type: "char", class: "btn_char" },
            { char: 'ר', type: "char", class: "btn_char" },
            { char: 'ש', type: "char", class: "btn_char" },
            { char: 'ת', type: "char", class: "btn_char" },
            { char: " ", type: "char", class: "btn_space" },
            { char: '.', type: "specialChar", class: "btn_specialChar" },
            { char: ',', type: "specialChar", class: "btn_specialChar" },
            { char: "English", type: "changeLanguege", class: "btn_apply" }
      ]
      let optionsButtons = [
            { char: 'CapsLock', type: "CapsLock", class: "btn_StyleApply" },
            { char: 'שנה צבע טקסט', type: "ChangeColor", class: "btn_StyleApply" },
            { char: '↻', type: "Undo", class: "btn_apply" },
            { char: 'מחק', type: "Del", class: "btn_apply" }
      ]
      function changeLang(changeTo) {
            setLang(changeTo);
      }
      function changeUpOrLow_state(changeTo) {
            setUpOrLow_state(changeTo)
            // setCharsButtons(EnglishLowerChars)
      }
      function onLengugeUpdate(changeTo) {
            if (changeTo === "HebrewChars") {
                  setCharsButtons(HebrewChars)
                  setLang("Hebrew")
            } else if (changeTo === "EnglishLowerChars") {
                  setCharsButtons(EnglishLowerChars)
                  setLang("English")
                  setUpOrLow_state("Low")
            } else if (changeTo === "EnglishUpperChars") {
                  setCharsButtons(EnglishUpperChars);
                  setLang("English");
                  setUpOrLow_state("Up")
            }
      }

      let [lang, setLang] = useState("English");
      let [UpOrLow_state, setUpOrLow_state] = useState("Up");
      let [charsButtons, setCharsButtons] = useState(EnglishUpperChars);

      return (
            <div className={classes.Kaybord} >
                  <Kays type="chars" updating={props.updating} KaysClass={classes.charsKaybord} lang={lang} setLang={changeLang} UpOrLow_state={UpOrLow_state} setUpOrLow_state={changeUpOrLow_state} charsButtons={charsButtons} setCharsButtons={setCharsButtons} EnglishUpperChars={EnglishUpperChars} EnglishLowerChars={EnglishLowerChars} HebrewChars={HebrewChars} onLengugeUpdate={onLengugeUpdate} />
                  <Kays type="options" updating={props.updating} KaysClass={classes.optionKaybord} optionsButtons={optionsButtons} lang={lang} setLang={changeLang} changeColor={props.changeColor} UpOrLow_state={UpOrLow_state} setUpOrLow_state={changeUpOrLow_state} charsButtons={charsButtons} setCharsButtons={setCharsButtons} EnglishUpperChars={EnglishUpperChars} EnglishLowerChars={EnglishLowerChars} HebrewChars={HebrewChars} onLengugeUpdate={onLengugeUpdate} />
            </div>
      )
}

export default Kaybord;