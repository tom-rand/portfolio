// Set the size of the html document (frame)
function setHTMLDimentions() {
	$('.frame').css('height', window.innerHeight - 40 + 'px');
	$('.frame').css('width', window.innerWidth - 40 + 'px');
}

// Set the size of the html document (frame)
function setFooterDimentions() {
	$('.backTo-footer').css('width', window.innerWidth - 40 + 'px');
}

// Set the padding-top of the project header based on the body position
function setProjectHeaderPadding() {
	var bodyPosition = $('body').offset().top;
	$('.project-header').css('padding-top', bodyPosition * 3);
	$('.project-details').css('padding-top', bodyPosition * 3);
}

// What happens when the user resizes the browser...
function onResizeEvent() {
	$(window).resize(function() {
		setHTMLDimentions();
		setProjectHeaderPadding();
		// setFooterDimentions();
	})
}

// What happens when the user clicks on a project...
function selectProjectEvent() {
	$('.linked-list li').click(function(evt) {
		toggleProjectDetails(this);
	});
}

// What happens when the user clicks on the back to projects link...
function selectBackToProjectEvent() {
	$('.backTo-footer').click(function(evt) {
		var targetProject = $(this).parent().prev('li');
		toggleProjectDetails(targetProject);
	});
}

// Toggle the detail content of the given project.
function toggleProjectDetails(project) {
	var targetProject = $(project).next('.project-details');
	var projectName = $(project).attr('project-name');

	$('.linked-list li').not(project).fadeToggle();
	$(targetProject).animate({height:'toggle'}, "swing");	
	$('.frame').fadeToggle();
	$('.linked-list .projectType-label').fadeToggle();
	$('header').animate({height: 'toggle'}, 'swing');

	$(targetProject).find('.project-header').toggleClass('header-transformed');
}

// What happens when the user clicks on the menu icon...
function selectMenuIconEvent() {
	$('.menu').click(function(evt) {
		$('#menu-overlay').fadeIn();
	});
}

// What happens when the user clicks the close icons...
function selectCloseIconEvent() {
	$('.close').click(function() {
		var targetProject = $(this).parents('.project-details').prev('li');
		toggleProjectDetails(targetProject);
	});
}


$(function initialize() {
	onResizeEvent();

	// Initialize Click Event Listeners
	selectProjectEvent();
	selectBackToProjectEvent();
	selectCloseIconEvent();
	selectMenuIconEvent();

	// Initialize Dimention Setters
	setHTMLDimentions();
	setProjectHeaderPadding();
	
	



});