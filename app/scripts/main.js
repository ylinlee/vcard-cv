$(window).load(function() {
	var vcard_preloader = document.querySelector('vcard-preloader');
	//var time = Math.floor((Math.random() * 20) + 10) * 100;
	//setTimeout(function(){ 
		vcard_preloader.addLoadedClass(); 
	//}, time);
	
});
//$(document).ready(function(){
window.addEventListener('WebComponentsReady', function(e) {
	if( $(window).width() <=767 ) {
			var vcard_menu = document.querySelector('vcard-toggle-menu');
			vcard_menu.toggleMenu();
	}

  matchElemHeight();

  var projectItems = document.querySelectorAll('vcard-project-item');
  var projectItem;
  for(var i=0; i<projectItems.length;i++){
    projectItem = projectItems[i];
    projectItem.addEventListener('changeCarousel', function (e) {
        var carousel = document.querySelector('vcard-project-detail');
        carousel.changeDetail(e.detail.title);
    });
  }

  /*var projectDetail = document.querySelector('vcard-project-detail');
  projectDetail.addEventListener('recalculateHeight', function (e) {
      matchElemHeight();
  });*/

});

function matchElemHeight(){
  //Gestion de alturas
  var e = {};
  $('[data-match-height], [data-mh]').each(function() {
      var self = $(this);
      var dataMh = self.attr('data-mh') || self.attr('data-match-height');
      e[dataMh] = dataMh in e ? e[dataMh].add(self) : self;
  });
  $.each(e, function() { 
    this.matchHeight(!0);
  });
};
