const promise = new Promise((resolve, reject) => {
  resolve('Hey!')
});

const cows = 15;

const countCows = new Promise((resolve, reject) => {
  if(cows > 10) {
    resolve(`We have ${cows} cows on the farm`);
  } else {
    reject(new Error('Too few cows'));
  }
})

countCows.then(resultado => {
  console.log(resultado);
}).catch(error => {
  console.log(error);
}).finally(() => {
  console.log('We are done');
})