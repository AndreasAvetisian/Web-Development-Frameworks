import React from 'react';


const styles = {
  products: {
    width: '33.33%',
    boxSizing: 'border-box',
    padding: '30px'
  },

  eachProduct: {
    backgroundColor: 'white',
    border: '2px solid black',
    borderRadius: '10px',
    height: '100%'
  },

  img: {
    marginLeft: '20px',
    marginTop: '20px'
  },

  name: {
    fontWeight: '700',
    marginTop: '20px',
    marginBottom: '5px',
    fontSize: '16px',
    padding: '5px'
  },

  rating: {
    fontSize: '16px',
    padding: '5px'
  },

  price: {
    width: 'auto',
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'orange',
    padding: '5px'
  },

  ship: {
    fontSize: '14px',
    color: '#565959',
    padding: '5px'
  }
}

export default function SearchResult(props) {
  return (
    <div style={styles.products}>
        <div style={styles.eachProduct}>
          <div style={styles.img}>
            <img src={`/images/${props.image}`} />
          </div>
          <div style={styles.name}>{props.name}</div>
          <div style={styles.rating}>Rating: {props.rating}</div>
          <div style={styles.price}>Price: ${props.price}</div>
          <div style={styles.ship}>{props.ship}</div>
        </div>
    </div>
  )
}
