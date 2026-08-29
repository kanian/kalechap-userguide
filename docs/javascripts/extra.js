document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.md-nav__link');
  links.forEach(function (link) {
    if (link.href && link.href.includes('learn/')) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
});
