/* JavaScript DOM Exercises 01 */
//
/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/
const paragraph = document.querySelector('p')
paragraph.style.backgroundColor = 'yellow';
/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (http://officeipsum.com/)
*/
const newElement = document.createElement('a');
const newContent = document.createTextNode('This is Link');

newElement.appendChild(newContent);
newElement.setAttribute("href", "http://officeipsum.com/");

const parent = paragraph.parentElement;
console.log(parent)

parent.insertBefore(newElement, paragraph.nextSibling);


/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/

const pContents = paragraph.textContent;

const split = pContents.split('.');

const mapping = split.map(par => (
  par + '.<br/>'
))

const inner = mapping.join('');

paragraph.innerHTML = inner;

/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/

console.log(inner.length);

const newHeading = document.createElement('p');
const newHeadingContent = document.createTextNode(inner.length);

newHeading.appendChild(newHeadingContent);


const header = document.querySelector('h1');

parent.insertBefore(newHeading, header.nextSibling);

/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/

console.log(paragraph.innerHTML)
const str = paragraph.innerHTML;

let getThinkng = str.replaceAll('?', '🤔')
let getAstonished = getThinkng.replaceAll('!', '😲');

console.log(getAstonished);

paragraph.innerHTML = getAstonished;
