import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const Form = (props) => (
    <div>
        <TextField
            hintText="Type task"
            fullWidth={true}
            value={props.newTaskNameProp}
            onChange={props.onNewTaskChangeProp}
        />
        <RaisedButton
            label="Add"
            primary={true}
            fullWidth={true}
            onClick={props.addTaskProp}
        />
    </div>
)

export default Form