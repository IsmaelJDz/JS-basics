const starWars7 = 'Star Wars: El despertar de la fuerza'
const pgStarWars7 = 13

const nameIsmael = 'Ismael'
const ageIsmael = 26

const nameDani = 'Dani'
const ageDani = 12 

function canWatchStarWars7(name, age){
	if (age >= pgStarWars7) 
	{
		alert(`${name} puede pasar a ver ${starWars7}`)
	}
	else
	{
		alert(`${name} no puede pasar a ver ${starWars7}.
			Tiene ${age} años y necesita tener ${pgStarWars7}
		`)
	}
}

canWatchStarWars7(nameIsmael, ageIsmael)
canWatchStarWars7(nameDani, ageDani)