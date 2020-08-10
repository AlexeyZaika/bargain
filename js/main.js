//Табы на странице
var tab;
var content;

window.onload = function () {
	content=document.getElementsByClassName('content__item');
	tab=document.getElementsByClassName('header-menu-list__item');
	hideTabsContent(1);
}

function hideTabsContent(a) {
	for (var i = a; i < content.length; i++) {
		content[i].classList.remove('show');
		content[i].classList.add('hide');
		tab[i].classList.remove('item-active');
	}
}

document.getElementById('tabs').onclick = function (event) {
	var target = event.target;
		if (target.className == 'header-menu-list__item') {
			for (var i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabsContent(i);
					break;
				}
			}
		}
}

function showTabsContent(b) {
	if (content[b].classList.contains('hide')) {
		hideTabsContent(0);
		tab[b].classList.add('item-active');
		content[b].classList.remove('hide');
		content[b].classList.add('show');
	}
}
//Меню бургер
$('.header-menu__icon').click(function(event) {
	$(this).toggleClass('active');
	$('.menu-burger').toggleClass('active');
	if($(this).hasClass('active')){
		$('body').data('scroll',$(window).scrollTop());
	}
		$('body').toggleClass('lock');
	if(!$(this).hasClass('active')){
		$('body,html').scrollTop(parseInt($('body').data('scroll')));
	}
});
//делает картинку фоновой
function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();
//Аккардеон
+function () {

	document.querySelector('.accordeon-section');

	document.querySelectorAll('.accordeon-section').forEach(function(section) {
		section.addEventListener('click', function(e) {
			
			document.querySelectorAll('.accordeon-section').forEach(function(section){
				section.classList.remove('opened');
				section.querySelector('.accordeon-body').style.maxHeight = '0px';
				
			})
			var accordeonSection = e.target.closest('.accordeon-section');

			var insideElHeight = accordeonSection.querySelector('.accordeon-body > *').clientHeight;

			accordeonSection.classList.add('opened');
			accordeonSection.querySelector('.accordeon-body').style.maxHeight = insideElHeight + 'px';
			
		})
	})

}()