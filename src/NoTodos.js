import React from 'react'
import ooops from './images/ooops.png'

const styles = {
    notodos: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center'
    },
    img: {
        width: "128px",
        height: "128px"
    }
}

function NoTodos() {
    return (
        <div style={styles.notodos}>
            <p>
            <img style={styles.img} src={ooops} alt="You have no any todos 😲😲😲"/><br />
            You have no any todos 😲😲😲</p>
        </div>
        
    )
}

export default NoTodos