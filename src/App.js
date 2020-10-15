import React from 'react';

function Food({name}) {
  return <h1>I like {name}</h1>;
}
const foodILike = [{
  name:"kimbap"
},
{
  name:"kimchi"
},
{
  name:"gogi"
}];

function App() {
  return (
    <div> 
      {foodILike.map(dish => <Food name={dish.name} />)}
    </div>
  );
}

export default App;
 