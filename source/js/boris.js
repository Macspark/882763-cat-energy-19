var changeBlock = document.querySelector('.change');
var changeBtn = document.querySelector('.change__button');
var changeBtnBefore = document.querySelector('.change__label--before');
var changeBtnAfter = document.querySelector('.change__label--after');

changeBtn.addEventListener('click', function() {
  if (changeBlock.classList.contains('change--switched')) {
    changeBlock.classList.remove('change--switched');
  } else {
    changeBlock.classList.add('change--switched');
  }
});

changeBtnBefore.addEventListener('click', function() {
    changeBlock.classList.remove('change--switched');
});

changeBtnAfter.addEventListener('click', function() {
    changeBlock.classList.add('change--switched');
});
