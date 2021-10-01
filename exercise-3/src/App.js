import React from 'react';
import data from './data.json';
import SearchView from './components/SearchView';

const styles = {
  wrapper: {
    backgroundColor: '#e9eaed'
  },

  searchBox: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginLeft: '30px'
  },

  searchInput: {
    width: '322px',
    height: '30px',
    border: '2px solid black',
    borderRadius: '10px',
    fontSize: '16px',
  }
}

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      items: data.items,
      productSearchString: ""
    }
  }

  searchChange = (event) => {
    this.setState({ productSearchString: event.target.value });
  }

  render() {  
    return (
        <div style={styles.wrapper}>
          <div style={styles.searchBox}>
            Search here! <input 
                            type="text" 
                            onChange={ this.searchChange } 
                            value={ this.state.productSearchString }
                            style={styles.searchInput}
                          />
          </div>
          <SearchView
          items={ this.state.items.filter((item) => item.name.toLowerCase().includes(this.state.productSearchString))}
          />
        </div>
    )
  }
}

export default App;