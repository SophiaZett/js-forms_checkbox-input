console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const success = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

tosCheckbox.addEventListener("change", () => {
  if (tosCheckbox.checked) {
    hideTosError();
  } else {
    showTosError();
  }
})

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
if (tosCheckbox.checked) {
  hideTosError();
  success.removeAttribute("hidden");
  alert("Form submitted");
  return;
} 
showTosError();
success.setAttribute("hidden", "");
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  
});
