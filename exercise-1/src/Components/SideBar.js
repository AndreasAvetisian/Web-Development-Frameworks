import React from 'react';

const styles = {
    eachBar: {
        // background: 'red',
        margin: '0px 0px 16px 0px',
        // border: '1px solid #cdcdcd',
        // borderWidth: '0px 0px 1px 0px',
        height: 'auto',
        background: 'white'
    },

    title: {
        // background: 'green',
        fontSize: '22px',
        fontFamily: 'Sanomat',
        fontWeight: '900',
        padding: '16px 0px 16px 0px',
        margin: '0px 16px 0px 16px',
        border: '1px solid #191919',
        borderWidth: '0px 0px 1px 0px',
    },

    flexBox: {
        display: 'flex',
        margin: '0px 16px 0px 16px',
    },

    numbers: {
        // background: 'yellow',
        marginRight: '8px',
        fontSize: '24px',
        color: '#4196a4',
        fontSize: '1.75rem',
        fontFamily: 'Sanomat',
        fontWeight: '800',
        display: 'flex',
        justifyContent: 'center'
    },

    text: {
        // background: 'pink',
        width: '100%',
        fontSize: '15px',
        padding: '4px',
    },

    textN: {
        width: '100%',
    },

    textBottom: {
        border: '1px solid #cdcdcd',
        borderWidth: '0px 0px 1px 0px',
        display: 'flex',
    },

    author: {
        fontSize: '12px',
        padding: '4px 0px'
    },
    
    buttonBox: {
        width: '108px',
        height: '36px',
        borderRadius: '9999px',
        // background: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        border: '1px solid #4196a4',
        borderColor: '#4196a4',
        color: '#4196a4'
    }
}

export default function SideBar({ sideBar }) {
    return (
        <div style={styles.eachBar}>
            <div style={styles.title}>{sideBar.title1}</div>
            <div>
                <div style={styles.flexBox}>
                    <div style={styles.text}>
                        <div style={styles.textBottom}>
                            <div style={styles.numbers}>{sideBar.id1}</div>
                            <div style={styles.textN}>
                                <div>{sideBar.text1}</div>
                                <div style={styles.author}>{sideBar.author}</div>
                            </div> 
                        </div>
                    </div>
                </div>
                <div style={styles.flexBox}>
                    <div style={styles.text}>
                        <div style={styles.textBottom}>
                            <div style={styles.numbers}>{sideBar.id2}</div>
                            <div style={styles.textN}>
                                <div>{sideBar.text2}</div>
                                <div style={styles.author}>{sideBar.author}</div>
                            </div> 
                        </div>
                    </div>
                </div>
                <div style={styles.flexBox}>
                    <div style={styles.text}>
                        <div style={styles.textBottom}>
                            <div style={styles.numbers}>{sideBar.id3}</div>
                            <div style={styles.textN}>
                                <div>{sideBar.text3}</div>
                                <div style={styles.author}>{sideBar.author}</div>
                            </div> 
                        </div>
                    </div>
                </div>
                <div style={styles.flexBox}>
                    <div style={styles.text}>
                        <div style={styles.textBottom}>
                            <div style={styles.numbers}>{sideBar.id4}</div>
                            <div style={styles.textN}>
                                <div>{sideBar.text4}</div>
                                <div style={styles.author}>{sideBar.author}</div>
                            </div> 
                        </div>
                    </div>
                </div>
                <div style={styles.flexBox}>
                    <div style={styles.text}>
                        <div style={styles.textBottom}>
                            <div style={styles.numbers}>{sideBar.id5}</div>
                            <div style={styles.textN}>
                                <div>{sideBar.text5}</div>
                                <div style={styles.author}>{sideBar.author}</div>
                            </div> 
                        </div>
                    </div>
                </div>
                <div style={styles.buttonBox}>{sideBar.button}</div>
            </div>
        </div>
    )
}