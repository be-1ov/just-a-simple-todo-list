import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

let styles = {
    input: {
        marginRight: '1rem'
    },
    button: {
        background: 'none',
        border: 'none',
        fontSize: '18px',
        cursor: 'pointer'
    }
}

function TodoElement({data, index}){
    const { removeTodo, toggleTodo } = useContext(Context)
    let classes = ["todoItem"]

    if (data.completed) {
        classes.push('done')
    }
    return (
        <li className={classes.join(" ")}>
            <span>
                <input checked={data.completed} type="checkbox" style={styles.input} onChange={() => {toggleTodo(data.id)}}/>
                <strong>{index+1}. </strong> 
                {data.title}
            </span>

            <button style={styles.button} onClick={() => removeTodo(data.id)}>&times;</button>
        </li>
    )
}

TodoElement.propTypes = {
    data: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}
export default TodoElement