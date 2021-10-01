import React from 'react';
import SearchResult from './SearchResult';

const styles = {
  allProducts: {
    display: 'flex',
    flexWrap: 'wrap'
  }
}


export default function SearchView(props) {
  return (
    <div>
      <div style={styles.allProducts}>
        {
          props.items.map(item => <SearchResult key={item.id} {...item} />)
        }
      </div>
    </div>
  )
}
