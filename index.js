// Code your solution in this file

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers, name) {
	return drivers.filter(function (newName) { 
		return name.toUpperCase() === newName.toUpperCase(); 
	});
}

function fuzzyMatch(drivers, name) {
	const nameLength = name.length;
	return drivers.filter(function (driver) {
    	return driver.slice(0, nameLength) === name;
  	});
}

function matchName(drivers, name) {
	const driversNew = [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ];

    return drivers.filter( function (driversNew) {
    	return driversNew.name.toUpperCase() === name.toUpperCase();
    });
}