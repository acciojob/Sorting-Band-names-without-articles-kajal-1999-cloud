// let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// let new_arr = [] ;

// for(let i =0 ; i<touristSpots.length ; i++) {
// 	new_arr = touristSpots[i] ;
// 	let split_str =
// }

let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'Aerosmith', 'The Beatles'];

// Remove articles from band names
const removeArticles = (name) => {
  const articles = ['a', 'an', 'the'];
  const words = name.split(' ');
  return words.filter((word) => !articles.includes(word.toLowerCase())).join(' ');
};

// Sort band names without articles in lexicographic order
bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Generate HTML list
let ul = document.createElement('ul');
ul.id = 'band';

bandNames.forEach((name) => {
  let li = document.createElement('li');
  li.textContent = name;
  ul.appendChild(li);
});

// Append the list to the body or any other element in your HTML
document.body.appendChild(ul);
