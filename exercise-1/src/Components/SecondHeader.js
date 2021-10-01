import React from 'react';

const styles = {

    mainDiv: {
        width: '100%',
        height: '53px',
        display: 'flex',
        justifyContent: 'center',
        background: 'white',
        border: '1px solid #ccc',
        borderWidth: '0px 0px 1px 0px',
    },

    flexBox: {
        display: 'flex',
        marginRight: '150px'
    },

    frontPage: {
        display: 'flex',
        alignItems: 'center',
        height: '48px',
        // background: 'yellow',
        borderColor: '#00194c',
        border: '5px solid #00194c',
        borderWidth: '0px 0px 5px 0px',
        margin: '0px 24px 0px 0px',
        fontWeight: '700'
    },

    div: {
        display: 'flex',
        alignItems: 'center',
        height: '53px',
        // background: 'orange',
        margin: '0px 24px 0px 0px'
    }
}

export default function SecondHeader() {
    return (
        <div style={styles.mainDiv}>
            <div style={styles.flexBox}>
                <div style={styles.frontPage}>front page</div>
                <div style={styles.div}>HS Visio</div>
                <div style={styles.div}>Most read</div>
                <div style={styles.div}>The latest</div>
                <div style={styles.div}>Policy</div>
                <div style={styles.div}>City</div>
                <div style={styles.div}>Culture</div>
                <div style={styles.div}>Science</div>
                <div style={styles.div}>Welfare</div>
                <div style={styles.div}>Food</div>
                <div style={styles.div}>Now</div>
            </div>
        </div>
    )
}