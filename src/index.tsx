import { createStore } from 'redux';
import reducer from './reducer';
import { dec, inc, rnd } from './actions';

const store = createStore(reducer);

document
.getElementById("inc")
?.addEventListener('click', ()=>{
  store.dispatch(inc());
});

document
.getElementById('dec')
?.addEventListener('click', ()=>{
  store.dispatch(dec())
})

document
.getElementById('rnd')
?.addEventListener('click', ()=>{
  const payload =  Math.floor(Math.random()*10);
  store.dispatch(rnd(payload))
        })

  const update = () =>{
    const counter = document.getElementById('counter');
    if (counter){
      counter.innerHTML = store.getState().toString();
    } else {
      console.log('ups counter element is undefined');
    }
  };

  store.subscribe(update);
store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: 'INC' });
store.dispatch({ type: 'INC' });
