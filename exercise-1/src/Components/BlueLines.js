import React from 'react';

const styles = {
    li: {
        display: 'flex',
        alignItems: 'center',
        background: '#4196a4',
        minHeight: '20px',
        padding: '16px 16px 16px 16px',
        marginBottom: '2px',
        color: 'white',
        fontWeight: '500'
    }
}

export default function BlueLines({ text }) {
    return (
        <li style={styles.li}>{text.title}</li>
    )
}