import React from 'react'
import Delete from 'material-ui/svg-icons/action/delete'
import MenuItem from 'material-ui/MenuItem'

const Task = (props) => (

    <MenuItem 
    primaryText={props.nameProp} 
    rightIcon={<Delete onClick={props.deleteTaskProp}/>} /> // Przekazywanie funkcji usuwającej taska pod propsem
)
export default Task