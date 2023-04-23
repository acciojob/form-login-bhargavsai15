const form = document.querySelectorAll('#form1>input');
form[2].addEventListener('click', getFormvalue);
function getFormvalue() {
  //Write your code here
  const firstName = form[0];
  const lastName = form[1];
  alert(firstName.value + ' ' + lastName.value);
}
