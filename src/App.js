import * as React from 'react';



const App = () => {
  //console.log('App renders');

  

  const stories = [
    {
      title: 'React test test',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 2,
      points: 9,
      objectID: 0,
    },
    {
      title: 'Redux test test',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 8,
      points: 4,
      objectID: 1,
    },
  ];

  // A
  const handleSearch = (event) => {
    // C
    console.log(event.target.value);
  };

  

  return (
    <div>
      <h1>Hacker Stories testing ignore</h1>
      
      <Search onSearch={handleSearch} />

      <hr />
      
      <List list={stories} />

    </div>
  );
}

const Search = (props) => {
  //console.log("Search renders");
  
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);

    //B
    props.onSearch(event);
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />

      <p>
        Searching for <strong>{searchTerm}</strong>.
      </p>
    </div>
  );
}

const List = (props) => (
    
    <ul>
        {props.list.map((item) => (
            <Item key={item.objectID} item={item} />
        ))}
    </ul>
);

const Item = (props) => (
  <li>
    <span>
      <a href={props.item.url}>{props.item.title}</a>
    </span>
    <span>{props.item.author}</span>
    <span>{props.item.num_comments}</span>
    <span>{props.item.points}</span>
  </li>
);
export default App;
