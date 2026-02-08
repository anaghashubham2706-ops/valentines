function goNext() {
  const heart = document.querySelector('.heart-wrapper');

  // Safety check
  if (!heart) return;

  heart.classList.add('expand');
  document.body.classList.add('fade-out');

  setTimeout(() => {
    window.location.href = "valentine/index.html";
  }, 700);
}
