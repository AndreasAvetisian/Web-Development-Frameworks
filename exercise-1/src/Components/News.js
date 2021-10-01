import React from 'react';

const styles = {
    eachNew: {
        background: 'white',
        width: '640px',
        padding: '16px 0px 0px',
        margin: '0px 16px 16px 0px',
        height: 'auto',
        border: '1px solid #cdcdcd',
        borderWidth: '0px 0px 1px 0px',
    },

    title: {
        margin: '0px 16px 16px 16px',
        // background: 'blue',
        fontFamily: 'Sanomat',
        fontSize: '32px',
        fontWeight: '900'
    },

    img: {
        margin: '16px',
        width: '608px',
        height: '342px'
    },

    mainText: {
        margin: '0px 16px 0px',
        width: '608px',
        // background: 'green',
        fontSize: '26px',
        fontFamily: 'Sanomat',
        fontWeight: '700'
    },

    text: {

    },

    textBeggining: {
        color: '#00518d'
    },

    whoAndTime: {
        margin: '30px 0px 30px 0px',
        // background: 'yellow',
        display: 'flex',
        color: '#484848',
        fontSize: '.875rem',
        textOpacity: 1,
        lineHeight: 1.2,
        paddingLeft: '16px'
    }
}

export default function News({ neww }) {
    return (
        <div style={styles.eachNew}>
            <div style={styles.title}>{neww.title}</div>
            <div style={styles.img}>{neww.img}</div>
            <div style={styles.mainText}>
                <div style={styles.textBeggining}>{neww.textBeggining}</div>
                <div style={styles.text}>{neww.text}</div>   
            </div>
            <div style={styles.whoAndTime}>
                <div>{neww.who}</div>
                    &nbsp;
                <div>{neww.time}</div>
            </div>
        </div>
    )
}