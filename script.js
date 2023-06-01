//your code here

//your code here

let bandNames = ['The Beatles', 'Aerosmith', 'Pink Floyd', 'The Rolling Stones', 'Led Zeppelin'];

function removeArticles(name) {
  // Define an array of articles to be excluded
  const articles = ['the', 'a', 'an'];

  // Split the name into words
  const words = name.split(' ');

  // Filter out the articles from the words array
  const filteredWords = words.filter((word) => !articles.includes(word.toLowerCase()));

  // Join the filtered words back into a string
  const filteredName = filteredWords.join(' ');

  return filteredName;
}

// Sort the band names in lexicographic order while excluding articles
const sortedBandNames = bandNames.sort((a, b) => {
  const nameA = removeArticles(a);
  const nameB = removeArticles(b);
  return nameA.localeCompare(nameB);
});

// Get the <ul> element with the id 'band'
const bandList = document.getElementById('band');

// Create <li> elements for each band name and append them to the <ul> element
sortedBandNames.forEach((bandName) => {
  const li = document.createElement('li');
  li.textContent = bandName;
  bandList.appendChild(li);
});

