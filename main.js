const colors = ['#1abc9c', '#3498db', '#9b59b6', '#f39c12', '#e74c3c'];

function handleWindowResize() {
  if (window.innerWidth < 400) {
    document.body.style.backgroundColor = colors[1];
  } else if (window.innerWidth >= 400 && window.innerWidth < 600) {
    document.body.style.backgroundColor = colors[2];
  } else document.body.style.backgroundColor = colors[3];
}
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
