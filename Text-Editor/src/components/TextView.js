import classes from './TextView.module.css'
import { useState } from 'react'

function TextView(props) {
      return (
            <div className={classes.TextView} style={{ color: props.color }}><p>
                  {props.content}
            </p>
            </div>
      )
}

export default TextView;