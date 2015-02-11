Template.layoutControl.events({
	'click .sidebar-right-trigger': function(e, t) {
    e.preventDefault();
    $('.site-wrapper').toggleClass('sidebar-right-on');
	}
});