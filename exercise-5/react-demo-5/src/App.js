import React from 'react';
// import data from './data.json';
import SearchView from './components/SearchView';
import AdminView from './components/AdminView';
import axios from 'axios';

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
    marginRight: '60px'
  }
}

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      // items: data.items,
      items: [],
      productSearchString: "",
      adminModeActive: false,
    }
    console.log("constructor");
  }

  componentDidMount() {
    console.log('Mounted');
    axios.get('http://localhost:4000/products')
    .then((response) => {
      console.log(response);
      this.setState({ items: response.data.items });
    })
    .catch((err) => console.log(err));
  }

  searchChange = (event) => {
    this.setState({ productSearchString: event.target.value });
  }

  // addNewItem = (name, ship, price, rating) => {
  //   let newItems = [...this.state.items];
  //   newItems.push({
  //     id: newItems.length + 1,
  //     name: name,
  //     ship: ship,
  //     price: price,
  //     rating: rating
  //   });

  //   this.setState({
  //     items: newItems
  //   });
  // }

  addNewItem = (name, ship, price, rating) => {
    axios.post('http://localhost:4000/products', {
      name: name,
      ship: ship,
      price: price,
      rating: rating
    })
    .then((response) => {
      this.setState({ items: response.data.items})
    })
    .catch((error) => {
      console.error(error);
    })
    let newItems = [...this.state.items];
    
    this.setState({
      items: newItems
    });
  }

  deleteItem = (itemId) => {
    axios.delete('http://localhost:4000/products/'+itemId, {id: itemId})
    .then(response => {
      this.setState({items: response.data.items})
      // this.setState({items: this.state.items.filter(item => item.id !== itemId)})
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() 
  {
    let output =
      <>
        <div style={styles.searchBox}>
          Search here! <input 
                    type="text" 
                    onChange={ this.searchChange } 
                    value={ this.state.productSearchString } 
                    style={styles.searchInput}
                  />
        <button onClick={() => this.setState({adminModeActive: !this.state.adminModeActive})}>Admin mode</button>
        </div>
        <SearchView
          items={ this.state.items.filter((item) => item.name.toLowerCase().includes(this.state.productSearchString)) }
          />
      </>


    if(this.state.adminModeActive) {
      output = <AdminView
                  disableAdminMode={() => this.setState({adminModeActive: false}) }
                  addNewItem={ this.addNewItem }
                  items={ this.state.items }
                  deleteItem={ this.deleteItem }
               />;
    }

    return (
      <>
        { output }
      </>
    )
  }

}

export default App;