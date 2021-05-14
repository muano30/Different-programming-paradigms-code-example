
const prepareMilkCoffee = () => 'milkCoffee';

const prepareBlackCoffee = () => 'blackCoffee';

const getCoffee = (prepareCoffee, numOfCups) => {
  const coffeeCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const coffeeCup = prepareCoffee();
    coffeeCups.push(coffeeCup);
  }
  return coffeeCups;
};

const coffee4MilkTeamFCC = getCoffee(prepareMilkCoffee, 12);
const coffee4BlackTeamFCC = getCoffee(prepareBlackCoffee, 13);;


console.log(
  coffee4MilkTeamFCC,
  coffee4BlackTeamFCC
);