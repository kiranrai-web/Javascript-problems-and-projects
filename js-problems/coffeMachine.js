// The Coffee Machine:
// In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

const randomDelay=()=>{
    return Math.floor(Math.random() * 5000) +1000;
}

async function brewCoffee(){
    const delay = randomDelay();
    await new Promise(resolve=>{
        setTimeout(() => {
          resolve();  
        },delay);
    })
    return `${coffee} is ready!`
}

let coffee = 'Espresso'
brewCoffee(coffee)
.then(message =>{
    console.log(message) //coffee is ready
})
.catch(err=>{
    console.error('Error while loading coffee',err)
})
