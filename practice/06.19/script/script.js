
    window.onload = function(){
      const dots = document.querySelectorAll('.ellipsis-vertical')
      for(let dot of dots){
        dot.addEventListener('click', function(){
          this.nextElementSibling.classList.toggle('show')
        })
      }
    }
