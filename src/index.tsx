import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);
const {dispatch} = store;

// import { dec, inc, rnd } from './actions';


// // const incDispatch = () => bindActionCreators(inc, dispatch)
// // const decDispatch = () => bindActionCreators(dec, dispatch)
// // const rndDispatch = (payload: number) => bindActionCreators(rnd, dispatch);

// const {incDispath, decDispatch, rndDispath} = bindActionCreators({
//   incDispath: inc,
//   decDispatch: dec,
//   rndDispath: rnd,
// }, dispatch)

import * as actions from './actions';

const {inc, dec, rnd} = 
  bindActionCreators(actions, dispatch);


document
.getElementById("inc")
?.addEventListener('click', ()=>{
  inc();
});

document
.getElementById('dec')
?.addEventListener('click', ()=>{
  dec();
})

document
.getElementById('rnd')
?.addEventListener('click', ()=>{
  const payload =  Math.floor(Math.random()*10);
  rnd(payload);
});

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
