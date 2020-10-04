let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

energy.shift(); // energy = energy.slice(1); // energy.splice(0, 1);
energy.push('geothermal');
console.log(energy);