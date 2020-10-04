let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome', 'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro', 'Marrakesh', 'New York City'];

let contains = (destination, arr) => {
  for (let i = 0; i <= arr.length; i += 1) {
    if (destination === arr[i]) return console.log(true);
  }
  return console.log(false);
};

// Alternate LS Solution
function contains(element, list) {
  return list.indexOf(element) >= 0;
}

contains('Barcelona', destinations); // true
contains('Nashville', destinations); // false