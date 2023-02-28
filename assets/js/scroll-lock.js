// Adds scroll position lock for default tutorials sidebar

if (document.querySelector('#sidebar-default') !== null) {
  let sidebar = document.getElementById('sidebar-default');

  let pos = sessionStorage.getItem('sidebar-scroll');
  if (pos !== null) {
      sidebar.scrollTop = parseInt(pos, 10);
  }

  window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('sidebar-scroll', sidebar.scrollTop);
  });
}
