const form = document.getElementById('orderForm');
const range = document.getElementById('progress');
const valueDisplay = document.getElementById('progressValue');

range.addEventListener('input', () => {
valueDisplay.textContent = `${range.value}%`;
});

form.addEventListener('submit', (e) => {
e.preventDefault();
const formData = new FormData(form);
const data = Object.fromEntries(formData.entries());
console.log('Данные формы:', data);
});


document.querySelectorAll('.custom-select').forEach(select => {
    const selected = select.querySelector('.custom-select__selected');
    const options = select.querySelector('.custom-select__options');
    const hiddenInput = select.querySelector('input[type="hidden"]'); 
  
    selected.addEventListener('click', () => {
      select.classList.toggle('open');
    });
  
    options.addEventListener('click', e => {
      if (e.target.tagName === 'LI') {
        selected.textContent = e.target.textContent;
        hiddenInput.value = e.target.textContent;
        select.classList.remove('open');
      }
    });
  
    document.addEventListener('click', e => {
      if (!select.contains(e.target)) select.classList.remove('open');
    });
  });
  