// https://www.youtube.com/watch?v=81mybnZPHDg

import { animals } from './animals';
import React from 'react'; /* enables us to use JSX */
import ReactDOM from 'react-dom'; /* enables us to render */
import './index.css'; /* The file is in the same folder as this file (index.js)*/

const title = '';

const showBackground = true;



// The src path is relative to the index.html NOT this file (index.js)
// Remember we use 'className' instead of 'class'
const background = (
  <img
    className='background'
    alt='ocean'
    src='./images/ocean.jpg'
  />
)



// Iterating over the 'animals' OBJECT (not array) - to create an array of image elements
const images = [];
 for (const animal in animals) {
   images.push(
     <img
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      ariaLabel={animal}
      role='button'
      onClick={displayFact}
     />
   )
 }

//  Event listener function to handle click.
// e.target  refers to the clicked element
// e.target.alt  will give us the animal name
function displayFact(e) {
  const selectedAnimal = e.target.alt;
  const animalInfo = animals[selectedAnimal];
  const optionIndex = Math.floor(Math.random()*animalInfo.facts.length);

  const funfact = animalInfo.facts[optionIndex];
  document.getElementById('fact').innerHTML = funfact;
}


// In animalFacts, we build-up/list the elements we want to render.
// It contains:
// A <h1> tag. If title is empty string, then put the 'Click....' string, otherwise, put back whatever is the current value.
// {background} is a variable holding an image element <img>
// p tag will have a random fact assigned to it, on a click event of any image.
// {images} is an array containing the <img> tags for each animal. We give it a className, to apply some css to it.
// 
const animalFacts = (
  <div>

    {/* We changed this below, just to show an alternate way using the OR operator||
    <h1>{title == "" ? "Click an animal for a fun fact" : title}</h1>
    */}
    {/* Another interesting way to do the above line, is using the OR operator.
    If 'title' is something, then that itself will be returned by the logical expression; otherwise the RHS of the OR ( || )will be returned instead*/}
    <h1>{title || "Click an animal for a fun fact"}</h1>

    {/* Using the AND operator: if showBackground is true, then background will be displayed. If you don't want this backgroung on/off switch mechanism, then just do the normal:  {background} */}
    {showBackground && background}
    <p id='fact'></p>
    <div className = 'animals'>
      {images}
    </div>
  </div>
)

// compile animalFacts and append it to the element with id=root
ReactDOM.render(animalFacts, document.getElementById("root"));