// add code snippets from README
let state;

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
} 

function dispatch(action) {
    state = reducer(state, action);
    render()
 } 

 function render() {
    let container = document.getElementById("container");
    container.textContent = state.count;
  } 

  
  let button = document.getElementById("button");

  button.addEventListener("click", () => {
    dispatch({ type: "counter/increment" });
  }); 

  
dispatch({ type: "@@INIT" }); 
// reducer({ count: 0 }, { type: "counter/increment" });
// dispatch({type: 'counter/increment'}) 
// dispatch({type: 'counter/increment'}) 
// dispatch({type: 'counter/increment'}) 