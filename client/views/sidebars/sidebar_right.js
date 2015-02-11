Template.sidebarRight.events({
	'click .section-toggle': function(e, t) {
    e.preventDefault();
    $(e.target).parent().toggleClass('section-open');
	}
});