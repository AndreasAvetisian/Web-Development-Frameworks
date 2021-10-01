import React from 'react';
import logo from './Icons/logo.PNG';
import login from './Icons/login.PNG';
import search from './Icons/search.PNG';
import menu from './Icons/menu.PNG';

const styles = {
    divMain: {
        display: 'flex',
        background: '#00194c',
        width: '100%',
        margin: '0 auto',
        height: '72px',
        justifyContent: 'center'
    },

    mainBox: {
        display: 'flex',
        width: '980px',
        // background: 'orange',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    mainBox1: {
        width: '421px',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        // background: 'blue'
    },

    mainBox2: {
        width: '418px',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        // background: 'green'
    },

    imgBox: {
        width: '273px',
        height: '38px',
        background: 'pink'
    },

    img: {
        width: '100%',
        height: '100%'
    },

    iconBox: {
        display: 'flex',
        color: 'white',
        fontSize: '1rem',
        marginLeft: '32px'
    },

    icons: {
        marginLeft: '8px',
        width: '24px',
        height: '24px'
    },

    someText: {
        color: 'white',
        fontSize: '1rem',
        marginLeft: '32px'
    },

    roomButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '110px',
        height: '36px',
        background: 'white',
        fontWeight: '500',
        borderRadius: '9999px',
        paddingBottom: '2px'
    }
}

export default function FirstHeader() {
    return (
        <div style={styles.divMain}>
            <div style={styles.mainBox}>
                <div style={styles.mainBox1}>
                    <div style={styles.imgBox}>
                        <img 
                            src={logo} 
                            alt="logo" 
                            style={styles.img}
                        />
                    </div>
                    <div style={styles.someText}>News</div>
                    <div style={styles.someText}>Foliage</div>
                </div>
                <div style={styles.mainBox2}>
                    <div style={styles.roomButton}>Room</div>
                    <div style={styles.iconBox}>
                        <div>Log in</div><img src={login} alt="login" style={styles.icons}/><div></div>
                    </div>
                    <div style={styles.iconBox}>
                        <div>Hae</div>
                        <div><img src={search} alt="search" style={styles.icons}/></div>
                        </div>
                    <div style={styles.iconBox}>
                        <div>Menu</div>
                        <div><img src={menu} alt="menu" style={styles.icons}/></div>
                    </div>
                </div>
            </div> 
        </div>
    )
}