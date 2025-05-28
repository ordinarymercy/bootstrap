
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


/*from faq.html... */

  function toggleDetail(e) {
    const title = e.currentTarget;
    const detail = title.nextElementSibling;
    toggleDisplay(detail);
    const chevron = title.querySelector('.chevron');
    chevron.classList.toggle('fa-chevron-down');
    chevron.classList.toggle('fa-chevron-up');
  }

  window.addEventListener('load', function(e) {
    const titles = document.querySelectorAll('.title');
    for (title of titles) {
      title.addEventListener('click', toggleDetail);
    } 
    }
    
  );

/*for carousel*/
