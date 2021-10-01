import React from 'react';
import SideBar2 from './SideBar2';

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

export default function SideBarList2(props) {
    return (
        <ul style={styles.ul}>
           { props.sideBars2.map(sideBar2 => {
                return <SideBar2 sideBar2={sideBar2}/>
            }) }
        </ul>
    )
}