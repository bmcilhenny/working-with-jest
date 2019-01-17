// arbitrary structure of middleware created by creator of Redux
// export default ({ dispatch }) =>
//   // next is a function, reference to the next middleware in our chain of middlewares
//   // if our current middleware doesnt care about the current action the next() function can forward the action to the next middleware
//    return function(next) {
//     return function(action) {
//     }
//   }
// }
// refactored w/arrow functions

export default ({dispatch}) => (next) => (action) => {
  // check if the action has a promise on the payload property of the action
  // if it does, wait for it to resolve
  // if it doesnt, send action on to next middleware
  if (!action.payload || !action.payload.then ) {
    // if it doesn't have a payload, or checking if .then, can only call .then on a promise
    return (next(action))
  }

  // if promise wait to get its data then dispatch the data
  action.payload.then(function(resp) {
    const newAction = {...action, payload: resp };
    dispatch(newAction)
    // going to send our newAction through all the middlewares so that we don't have to organize middlewares, it just gets sent through them all
  })
}
