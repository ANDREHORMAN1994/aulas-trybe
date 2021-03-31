const CHANGE_TEXT = 'CHANGE TEXT';
const SHOW_TEXT = 'SHOW TEXT';

function changeText(value) {
  return ({
    type: CHANGE_TEXT,
    value,
  });
}

function showText() {
  return {
    type: SHOW_TEXT,
  }
}

export const actions = {
  changeText,
  showText,
}

export const typeActions = {
  CHANGE_TEXT,
  SHOW_TEXT,
}
