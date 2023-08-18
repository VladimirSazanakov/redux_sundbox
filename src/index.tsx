import { createStore } from 'redux';

const reducer = (state = 0, action: any) => {

  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
       return state -1;

    default:
      return state;
  }
}

const store = createStore(reducer);

document
  .getElementById("inc")
  ?.addEventListener('click', ()=>{
    store.dispatch({type: "INC"});
  });

  document
    .getElementById('dec')
    ?.addEventListener('click', ()=>{
      store.dispatch({type: 'DEC'})
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
