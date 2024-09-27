const colorPicker = document.getElementById('colorPicker');

colorPicker.addEventListener('input', () => {
  document.body.style.backgroundColor = colorPicker.value;   

});