import React from 'react';
import News from './News';

const styles = {
    newsBox: {
        // background: 'red',
        // width: '640px',
        // padding: '16px 0px 0px',
        // margin: '0px 16px',
        // height: '560px'
    }
}

export default function NewsList(props) {
    return (
        <div style={styles.newsBox}>
            { props.news.map(neww => {
                return <News neww={neww} />
            }) }
        </div>
    )
}