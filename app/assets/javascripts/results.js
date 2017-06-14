
$( document ).ready( function() {
$('.show').hide();
$('.hide').show();


if (ho === "no") {
	$('.ho').hide();
	$('.li--2').text("not applying for a job in the Home Office");
}
else {
$('.no--ho').hide();
};


if (nat === "1") {
	$('.section--2, .section--3').hide();
}
else if (nat === "2") {
	$('.section--1, .section--3').hide();
	$('.li--1').text("a European Economic Area or Swiss National");
}
else if (nat === "3") {
	$('.section--1, .section--2').hide();
	$('.li--1').text("a Commonwealth Citizen or British Protected Person");
}
else if (nat === "4") {
	$('.section--1, .section--2').hide();
	$('.li--1').text("a Qualifying Turkish National");
}
else if(nat === "5") {
	$('.section--1, .section--2').hide();
	$('.li--1').text("a family member of a UK, EEA, Swiss or Qualifying Turkish National");
}
else {
// window.location.replace("/")
};

})