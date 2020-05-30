import React from 'react';
import logo from './logo.svg';
import './App.css';

const cats = [
  {
    name: 'mano do ceu',
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOlcdQ7fMkdjlCl09Ge9h-wO_JPr8VdI-ny53fQId70hpMwc56&s',
    like: 1
  },
  {
    name: 'tete',
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_5p8Pz2Z4SjH5OXx9d_1NirV3jhebMRK3Nv-UmQuiyW5VCexi&s',
    like: 2
  },
  {
    name: 'antonio',
    picture: 'https://thecrazycatphotographer.files.wordpress.com/2018/10/cropped-sybal2-e1540903670230.jpg',
    like: 3
  }
];


class FormNewCat extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();

    // console.log(e.target.elements.catName.value);

    let name = e.target.elements.catName.value;
    let url = e.target.elements.catUrl.value

    this.props.handleNewCat(
      name,
      url
     );

      e.target.elements.catName.value = "";
      e.target.elements.catUrl.value = "";

  }

  render () {
    return (
    <form onSubmit={this.handleSubmit}>
      <div>
        <input type='text' name='catName' required/>
      </div>
      <div>
        <input type='url' name='catUrl' required/>
      </div>
      <div><button type='submit'>Cadastrar</button></div>
    </form>
    )
  }
}


const CatView = props => {
  const { cat, ind, handleClickCat } = props;

  return (
    <div className='catView'>
      <div><img src={cat.picture} alt='' width={300}></img></div>
      <div>{cat.name}</div>
      <div>
        <button onClick={ () => handleClickCat(ind) }>Gostei! {cat.like}</button>
      </div>
    </div>

    )
}

class App extends React.Component {
  state = {
    cats
  }

  handleClickCat = (key) => {
    cats[key].like += 1;
    this.setState({cats})
  }

  handleNewCat = (catName, catUrl) => {
    cats.push({name: catName, picture: catUrl, like: 0})
    this.setState({cats})
  }

  render () {
    return (
      <div className='App'>

        <FormNewCat handleNewCat={this.handleNewCat}/>

        { this.state.cats.map( (cat, key) => (
            <CatView 
              cat={cat}
              key={key}
              ind={key}
              handleClickCat={this.handleClickCat}
            />
          )
        ) }
      </div>
      )
  }
}

export default App;
