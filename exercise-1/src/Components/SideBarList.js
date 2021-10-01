import React from 'react';
import SideBar from './SideBar';

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

export default function SideBarList(props) {
    return (
        <ul style={styles.ul}>
           { props.sideBars.map(sideBar => {
                return <SideBar sideBar={sideBar}/>
            }) }
        </ul>
    )
}