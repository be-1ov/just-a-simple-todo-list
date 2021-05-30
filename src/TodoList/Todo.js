import React from 'react'
import PropTypes from 'prop-types'
import TodoElement from "./TodoElement"

let styles = {
    ul : {
        listStyle: "none",
        margin: 0,
        padding: 0
    }
}

function TodoList({todos}) {
    return (
        <ul style={styles.ul}>
            {
            todos.map((element, index) => {
                return <TodoElement data={element} index={index} key={element.id} />
            })
            }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TodoList