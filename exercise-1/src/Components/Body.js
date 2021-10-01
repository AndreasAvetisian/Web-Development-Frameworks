import React from 'react';
import BlueLinesList from './BlueLinesList';
import NewsList from './NewsList';
import SideBarList from './SideBarList';
import SideBarList2 from './SideBarList2';
import Picture1 from './NewsPictures/newsPicture1.jpg';
import Picture2 from './NewsPictures/newsPicture2.jpg';
import Picture3 from './NewsPictures/newsPicture3.jpg';
import Picture4 from './NewsPictures/newsPicture4.jpg';
import Picture5 from './NewsPictures/newsPicture5.jpg';
import Picture6 from './NewsPictures/newsPicture6.jpg';

const styles = {
    div: {
        display: 'flex',
        justifyContent: 'center',
        margin: '0 auto',
        // background: 'red',
        width: '100%',
        height: 'auto'
    },

    conteiner: {
        // background: 'green',
        width: '980px'
    },

    blueLines: {
        marginTop: '20px',
        marginBottom: '20px'
    },

    newsss: {
        // background: 'white',
        display: 'flex',
        // justifyContent: 'space-between',
    },

    pictureSize: {
        width: '100%',
        height: '100%'
    },

    line: {
        background: '#e9eaed',
        width: '16px'
    },

    sideBar: {
        width: '323px',
        // background: 'white',
    }
}

export default function Body() {
    const texts = [
        {id: 1, title: 'RUSSIA: Three similar Boris Vishnevskis nominated in St. Petersburg election - Dual creatures confuse voters'},
        {id: 2, title: 'DIAMOND OF THE DAY: There are only six movements in the worlds most famous hall program: Such is Arnold Schwarzeneggers “golden spruce”'}
    ]

    const news = [
        {
            id: 1, 
            title: '', 
            img: <img src={Picture1} alt="Picture1" style={styles.pictureSize}/>, 
            textBeggining: 'The parliament |',
            text: 'President Vehviläinen anticipates several intervening issues in the autumn of Parliament - Live broadcast of the opening of the session',
            who: 'Policy', 
            time: '7.9. 13:57'
        },
        {
            id: 2, 
            title: 'Afghanistan',
            img: <img src={Picture2} alt="Picture2" style={styles.pictureSize}/>, 
            textBeggining: 'Afghanistan |',
            text: '“No one is helping my wife in Afghanistan” - Hussein, 27, from Kauniainen, is one of many Afghans who have been waiting for family reunification for a long time',
            who: 'Homeland', 
            time: '7.9. 14:34'
        },
        {
            id: 3, 
            title: '',
            img: <img src={Picture3} alt="Picture3" style={styles.pictureSize}/>, 
            textBeggining: 'schools |',
            text: 'The teacher described drowning his pupil and called this his “personal drug” - The employer did not even hear about the matter in the legal process, the teacher continued to work in Vantaa',
            who: 'City', 
            time: '7.9. 6:52'
        },
        {
            id: 4, 
            title: '',
            img: <img src={Picture4} alt="Picture4" style={styles.pictureSize}/>, 
            textBeggining: 'Comics |',
            text: 'Spouse left Anna Härmälä alone with baby - Härmälä made a “cruel funny” cartoon about her desperate situation',
            who: 'Culture', 
            time: '7.9. 11:16'
        },
        {
            id: 5, 
            title: '',
            img: <img src={Picture5} alt="Picture5" style={styles.pictureSize}/>, 
            text: 'Shooting is becoming more common on the streets of Sweden, and now Malmö is trying to apply the “Boston Miracle” in the Swedish welfare state',
            textBeggining: 'Sweden |',
            who: 'Abroad', 
            time: '7.9. 6:21'
        },
        {
            id: 6, 
            title: '',
            img: <img src={Picture6} alt="Picture6" style={styles.pictureSize}/>, 
            text: 'Onni Valakari shook a philosophical aphorism during the match against France, which made the teammates draw oxygen: “Damn it was well said”',
            textBeggining: 'football |',
            who: 'Sport', 
            time: '6.9. 15:51'
        },
    ]

    const sideBars = [
        {
            id1: 1, id2: 2, id3: 3, id4: 4, id5: 5,
            title1: 'Most read', 
            text1: 'person | Many have a man in their immediate circle who is “foxed” all the time - It can be a more serious sign than we think, says psychologist Teemu Ollikainen',
            text2: 'training | There are only six movements in the world’s best-known gym program - such is Arnold Schwarzenegger’s “golden spruce,” whose power is still undeniable',
            text3: 'comics | Spouse left Anna Härmälä alone with baby - Härmälä made a “cruel funny” cartoon about her desperate situation',
            text4: 'architecture | “Stunningly magnificent spaces” - A house was built in the densely built-up Sörnäinen, which makes even art professionals gasp for breath.',
            text5: 'energy | The price of Helen’s district heating will rise 30 percent, but the algorithm showed an even bigger increase',
            author: 'FOR SUBSCRIBERS',
            button: 'Show more'
        }
    ]

    const sideBars2 = [
        {
            time1: '0:07', time2: '7.9. 22:39', time3: '7.9. 22:20', time4: '7.9. 21:12', time5: '7.9. 20:51',
            title1: 'The latest', 
            text1: 'football | France knocked out Finlands 2-0 with Antoine Griezmanns goals - HS followed the World Cup qualifiers moment by moment',
            text2: 'Volleyball | The volleyball mens place was confirmed on Tuesday, although the match of the evening resulted in a loss to Holland: "Yes, I was left in a tooth cavity"',
            text3: 'Mexico | Mexican Supreme Court: criminalizing abortion unconstitutional',
            text4: 'cryptocurrency | Bitcoin became the official currency of El Salvador, but its introduction stumbled badly: the virtual wallet could not be downloaded from app stores',
            text5: 'running | “Even though we were always on the move, a 29-minute race was pulled” - the mountain marathon in the Alps really challenged the Finns',
            button: 'Show more'
        }
    ]

    return (
        <div style={styles.div}>
            <div style={styles.conteiner}>
                <div style={styles.blueLines}>
                    <BlueLinesList texts={texts}/>
                </div> 
                <div style={styles.newsss}>
                    <div>
                        <NewsList news={news}/>
                    </div>
                    <div style={styles.sideBar}>
                        <div>
                            <SideBarList sideBars={sideBars}/>
                            <SideBarList2 sideBars2={sideBars2}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}