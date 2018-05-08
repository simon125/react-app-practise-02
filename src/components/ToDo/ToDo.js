import React from 'react'
import Form from './Form'
import List from './List'
import Container from '../Container'



class ToDo extends React.Component {
    state = {
        tasks: [
            { name: 'smieci', uid: 'ksajddkasjd' },
            { name: 'umyc okna', uid: 'kajsnxmznkjqw' },
            { name: 'nauczyc sie reacta', uid: 'askjjxnzwq' }
        ]
        ,
        newTaskName: ''
    }

    deleteTask = (taskUid) => {
        const newTasks = this.state.tasks.filter(task => taskUid !== task.uid)
        this.setState({
            tasks: newTasks
        })
    }

    addTask = (taskName) => {
        if(!this.state.newTaskName)return
        const newTask = {
            name: this.state.newTaskName,
            uid: Date.now()
        }
        const newTasks = this.state.tasks.concat(newTask)
        
        this.setState({
            tasks: newTasks,
            newTaskName: ''

        })
    

    }

    onNewTaskChange = (event, newValue) => this.setState({
        newTaskName: newValue
    })

    render() {
        return (
            <div>
                <Container>
                    <Form
                        onNewTaskChangeProp={this.onNewTaskChange}
                        newTaskNameProp={this.state.newTaskName}
                        addTaskProp={this.addTask}
                    />
                </Container>
                <Container>
                    <List
                        tasksProp={this.state.tasks}
                        deleteTaskProp2={this.deleteTask}
                    />
                </Container>
            </div>
        )
    }


}

export default ToDo