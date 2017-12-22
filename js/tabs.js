// var tabsLi = document.querySelectorAll(".menu-nav");
// for (var i = 0; i < tabsLi.length; i++) {
//   tabsLi[i].addEventListener("click", changeTab);
// }
//
// function changeTab() {
//   var tabs = document.querySelectorAll(".tab");
//   var selectedTab = event.target.dataset.selection;
//   for (var i = 0; i < tabs.length; i++) {
//     tabs[i].style.display = "none";
//   }
//   var activeTab = document.getElementById(selectedTab);
//   activeTab.style.display = "block";
// }

var liTab = document.querySelectorAll(".menu-nav");
for (var i = 0; i < liTab.length; i++) {
  liTab[i].addEventListener("click", changeTab);
}

function changeTab() {
  var divTab = document.querySelectorAll(".tab");
  for (var i = 0; i < divTab.length; i++) {
    divTab[i].style.display = "none";
  }
  var divToShow = event.target.dataset.selection;
  var div = document.getElementById(divToShow);
  div.style.display = "block";
}
