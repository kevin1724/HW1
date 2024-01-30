window.addEventListener('load', loadPage);

function loadPage(event) {
  console.log('The page has now loaded.');
}

document.addEventListener('DOMContentLoaded', function() {
  var bioText = document.querySelector('.bio').textContent;
  console.log(bioText);
});
