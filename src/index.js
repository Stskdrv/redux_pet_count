import {createStore} from 'redux';



const reducer = (state =0 , action) => { // делаем функцию редюсер, которая получает в качестве аргументов стэйт и действие которое будет выполняться, Действие это объект, у него обязательно должен быть тип и должен быть строкой.
  switch (action.type ) {// теперь мы проверяем что за тип действия у нас задан, если он INC то выполняем увеличение на единичку, если нет то пока просто вернем 0.
    case 'INC':
      return  state + 1;
    case 'DEC':
      return  state - 1;
    case 'RND':
      return  state + action.value;
    default:
      return state;
  }
}// redusre всегда должна быть чистой функцией и зависеть только от стэйта и от экшна и не иметь побочных эффектов.

const inc = () => {// делаем функцию эксш криэйтер, она возвращает то, что нам нужно, теперь мы просто должны ее вызвать в нужном месте.
  return {
    type: 'INC',
  }
}
const dec = () => ({type: 'DEC'});

const rnd = (value) => ({type: 'RND', value});


const store = createStore(reducer);// стандартная функция  киэйт стор создает стор, который содержит в себе и редюсер (голику) и само состояние стэйт.

document.getElementById("inc").addEventListener('click', () => {
  store.dispatch(inc());
});

document.getElementById("dec").addEventListener('click', () => {
  store.dispatch(dec());
});
document.getElementById("rnd").addEventListener('click', () => {
  let value = Math.floor(Math.random()* 10);
  store.dispatch(rnd(value));
});


Math.floor(Math.random()*10)


const update = () => {
  document.getElementById('counter').textContent = store.getState();
}
store.subscribe(update);

// store.subscribe(() => { // это функция подписки на наш стор, когда он изменяется, каждый раз будет вызываться стрелочная функция внутри сабскрайба. НА данном примери нам не надо консолложить постоянно наше состояние вручную, это делает сабскрайбер.
//   console.log(store.getState());
// })

// store.dispatch({type: 'INC'});

// store.dispatch({type: 'INC'});

// store.dispatch({type: 'INC'});

// эти верхние строки с применением стандартной команды заменяют нам нижние строчки кода:
// let state = reducer(undefined, {});
// state = reducer(state, {type: "INC"});
// console.log(state);
// state = reducer(state, {type: "INC"});
// console.log(state);






