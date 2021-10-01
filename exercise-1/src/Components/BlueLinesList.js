import React from 'react';
import BlueLines from './BlueLines'

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

export default function BlueLinesList(props) {
    return (
        <ul style={styles.ul}>
            { props.texts.map(text => {
                return <BlueLines text={text} />
            }) }
        </ul>
    )
}