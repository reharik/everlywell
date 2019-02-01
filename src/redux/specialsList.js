export const SET_SPECIALS = 'everlywell/SET_SPECIALS';

export default (state = {date: '', specials:[]}, action = {}) => {
  if(action.type === SET_SPECIALS) {
      return {date: action.date, specials:action.specials}
    } else {
    return state;
  }
}

function setSpecials(specials) {
  return {
    type:SET_SPECIALS,
    specials:specials,
    date:new Date().toDateString()
  };
}

export {
  setSpecials
}
