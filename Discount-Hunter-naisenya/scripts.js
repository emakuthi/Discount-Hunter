function openNav() {
    document.getElementById("mySidenav").style.width = "500px";
  }
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

$(document).ready(function(){
  $(".wish-icon i").click(function(){
      $(this).toggleClass("fa-heart fa-heart-o");
  });
});	

/*  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }*/

  filterSelection("all")
        function filterSelection(c) {
            var x, i;
  x = document.getElementsByClassName("col-md-3");
  if (c == "col-md-3") c = "";
            for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
  if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
}
}

        function w3AddClass(element, name) {
            var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
            for (i = 0; i < arr2.length; i++) {
                if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i]; }
}
}

        function w3RemoveClass(element, name) {
            var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
            for (i = 0; i < arr2.length; i++) {
                while (arr1.indexOf(arr2[i]) > -1) {
    arr1.splice(arr1.indexOf(arr2[i]), 1);
  }
}
element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
            for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }


// init Isotope
// var $grid = $('.grid').isotope({
//   // options
// });
// // filter items on button click
// $('.filter-button-group').on('click', 'button', function () {
//   var filterValue = $(this).attr('data-filter');
//   $grid.isotope({ filter: filterValue });
// });