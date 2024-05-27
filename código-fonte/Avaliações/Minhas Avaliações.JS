function myFunction(x) {
    x.classList.toggle("change");
  }

  function openNav() {
      document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
      document.getElementById("myNav").style.width = "0%";
  }

  const stars = document.querySelectorAll('.star-icon');

  document.addEventListener('click', function(e) {
    const classStar = e.target.classList;
    const starIndex = Array.from(stars).indexOf(e.target);
  
    if (!classStar.contains('ativo')) {
      stars.forEach((star, index) => {
        if (index <= starIndex) {
          star.classList.add('ativo');
        } else {
          star.classList.remove('ativo');
        }
      });
  
      console.log(e.target.getAttribute('data-avaliacao'));
    }
  });

  
