import classes from './TextEditorApp.module.css'
import TextView from './TextView.js';
import Kaybord from './Kaybord.js';
import { cloneElement, useState } from 'react';

export function TextEditorApp() {
      let [content, setContent] = useState("");//תוכן אזור הטקסט
      let [beforUpdate, setBeforUpdate] = useState("");//עבור שמירת ערכים לפני שינוי תצוגה
      function onContentUpdate(textUpdate, DelOrUndo = "Updeate") {//מטפל בכל ענין עדכון תצוגת הטקסט על המסך
            switch (DelOrUndo) {
                  case "Updeate"://מיועד לעדכון הטקסט שעל המסך
                        setBeforUpdate(content);
                        setContent(content + textUpdate);
                        break;
                  case "Del"://מיועד למחיקת כל הטקסט
                        setBeforUpdate(content);
                        setContent("");
                        break;
                  case "Undo":
                        if (beforUpdate.length > content.length) {
                              setContent(beforUpdate);//מיועד לשחזור הטקסט לאחר מחיקה
                        } else {//מיועד למחיקת הקלדה אחרונה
                              setContent(content.substring(0, content.length - 1));
                              setBeforUpdate(content.substring(0, content.length - 1));
                        }
                        break;
                  default:
                        break;
            }
      }
      let [color, setColor] = useState("black");//צבע הגופן
      function ChangeColor() {//עדכון צבע הגופן
            let newcolor = prompt("מוגדר כעת: " + color + "\nלשינוי הכנס ערכי צבע רצויים, תוכל להשתמש בכל פורמט צבע\n");
            if (newcolor !== null) {
                  setColor(newcolor)
            }
      }
      return (
            <div className={classes.TextEditorApp} >
                  <TextView content={content} color={color} />
                  <div className={classes.kaysArea}>
                        <Kaybord updating={onContentUpdate} changeColor={ChangeColor} />
                  </div>
            </div>
      );
}