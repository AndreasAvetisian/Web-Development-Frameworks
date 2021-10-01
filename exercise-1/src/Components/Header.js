import React from 'react';
import FirstHeader from './FirstHeader';
import SecondHeader from './SecondHeader';

const styles = {
    div: {
        margin: '0 auto',
        // background: 'yellow',
        width: '100%',
        height: '125px'
    }
}


export default function Header() {
    return (
        <div style={styles.div}>
            <FirstHeader></FirstHeader>
            <SecondHeader></SecondHeader>
        </div>
    )
}
