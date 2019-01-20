import tv4 from 'tv4';
import stateSchema from 'middlewares/stateSchema';


// getState() is a function that will give us our entire redux store
export default ({dispatch, getState}) => (next) => (action) => {
  next(action);

  if (!tv4.validate(getState(), stateSchema)) {
    console.warn('Invalid state schema detected');
  };

}
