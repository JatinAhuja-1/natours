// type is 'success' or 'error'

export const hideAlert = () => {
  const el = document.querySelector('.alert');
  //moving up to parent and doing dom manioulation and deleting a child 
  if (el) el.parentElement.removeChild(el);
};

export const showAlert = (type, msg) => {
  const markup = `<div class="alert alert--${type}">${msg}</div>`;
  document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
  window.setTimeout(hideAlert, 5000)
};
