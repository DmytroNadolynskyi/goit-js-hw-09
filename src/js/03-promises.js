import { Notify } from "notiflix";

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', onFormSubmit);


function onFormSubmit(e){
  e.preventDefault();
  
  let delay = Number(e.currentTarget.delay.value);
  let step = Number(e.currentTarget.step.value);
  let amount = Number(e.currentTarget.amount.value);

for (let position = 1; position <= amount; position += 1) {
  createPromise(position, delay)
  .then(({ position, delay }) => {
    
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    
  })
  .catch(({ position, delay }) => { 
    
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    
  });
  delay += step;
}
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}




