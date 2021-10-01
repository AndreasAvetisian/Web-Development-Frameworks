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

    time: {
        // background: 'yellow',
        width: '36px',
        marginRight: '8px',
        color: '#999',
        fontSize: '.8rem',
        display: 'flex',
        justifyContent: 'center'
    },

    text: {
        // background: 'pink',
        width: '100%',
        fontSize: '15px',
        padding: '4px 0px 4px 0px',
    },

    textN: {
        width: '100%',
    },

    textBottom: {
        border: '1px solid #cdcdcd',
        borderWidth: '0px 0px 1px 0px',
        display: 'flex'
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

export default function SideBar2({ sideBar2 }) {
    return (
        <div style={styles.eachBar}>
            <div style={styles.title}>{sideBar2.title1}</div>
            <div>
                <div style={styles.flexBox}>
                    <div style={styles.text}>
                        <div style={styles.textBottom}>
                            <div style={styles.time}>{sideBar2.time1}</div>
                            <div style={styles.textN}>
                                <div>{sideBar2.text1}</div>
                            </div> 
                        </div>
                    </div>
                </div>
                <div style={styles.flexBox}>
                    <div style={styles.text}>
                        <div style={styles.textBottom}>
                            <div style={styles.time}>{sideBar2.time2}</div>
                            <div style={styles.textN}>
                                <div>{sideBar2.text2}</div>
                            </div> 
                        </div>
                    </div>
                </div>
                <div style={styles.flexBox}>
                    <div style={styles.text}>
                        <div style={styles.textBottom}>
                            <div style={styles.time}>{sideBar2.time3}</div>
                            <div style={styles.textN}>
                                <div>{sideBar2.text3}</div>
                            </div> 
                        </div>
                    </div>
                </div>
                <div style={styles.flexBox}>
                    <div style={styles.text}>
                        <div style={styles.textBottom}>
                            <div style={styles.time}>{sideBar2.time4}</div>
                            <div style={styles.textN}>
                                <div>{sideBar2.text4}</div>
                            </div> 
                        </div>
                    </div>
                </div>
                <div style={styles.flexBox}>
                    <div style={styles.text}>
                        <div style={styles.textBottom}>
                            <div style={styles.time}>{sideBar2.time5}</div>
                            <div style={styles.textN}>
                                <div>{sideBar2.text5}</div>
                            </div> 
                        </div>
                    </div>
                </div>
                <div style={styles.buttonBox}>{sideBar2.button}</div>
            </div>
        </div>
    )
}