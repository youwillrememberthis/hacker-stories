import * as React from 'react';



const App = () => {
<<<<<<< HEAD
=======
  //console.log('App renders');

  

>>>>>>> master
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
<<<<<<< HEAD
  ]
=======
  ];

  // A
  const handleSearch = (event) => {
    // C
    console.log(event.target.value);
  };

  
>>>>>>> master

  return (
    <div>
      <h1>Hacker Stories testing ignore</h1>
      
<<<<<<< HEAD
      <Search />
=======
      <Search onSearch={handleSearch} />
>>>>>>> master

      <hr />
      
      <List list={stories} />

    </div>
  );
}

<<<<<<< HEAD
const Search = () => {
=======
const Search = (props) => {
  //console.log("Search renders");
  
>>>>>>> master
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
<<<<<<< HEAD
=======

    //B
    props.onSearch(event);
>>>>>>> master
  };

  return (
    <div>
<<<<<<< HEAD
      <label htmlFor="search">Search</label>
=======
      <label htmlFor="search">Search: </label>
>>>>>>> master
      <input id="search" type="text" onChange={handleChange} />

      <p>
        Searching for <strong>{searchTerm}</strong>.
      </p>
    </div>
  );
}

const List = (props) => (
<<<<<<< HEAD
=======
    
>>>>>>> master
    <ul>
        {props.list.map((item) => (
            <Item key={item.objectID} item={item} />
        ))}
<<<<<<< HEAD
      </ul>
=======
    </ul>
>>>>>>> master
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
