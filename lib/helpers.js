'use strict';

UI.registerHelper('returnIfRoute', function(routeName, text){
	var route = Router.current().route.getName();
	if (route == routeName) {
		return text;
	}
});

var m_names = new Array(
	i18n.t('January'),
	i18n.t('February'),
	i18n.t('March'),
	i18n.t('April'),
	i18n.t('May'),
	i18n.t('June'),
	i18n.t('July'),
	i18n.t('August'),
	i18n.t('September'),
	i18n.t('October'),
	i18n.t('November'),
	i18n.t('December')
);

UI.registerHelper('parseDate', function(date){
	var curr_date = date.getDate();
	var curr_month = date.getMonth();
	var curr_year = date.getFullYear();
	return (curr_date + '/' + m_names[curr_month] + '/' + curr_year);
});

// PERMISSIONS CONTROL
UI.registerHelper('isAdmin', function(){
	// console.log(isAdmin(Meteor.userId()));
	return isAdmin(Meteor.userId());
});

UI.registerHelper('isTeacher', function(){
	return isTeacher(Meteor.userId());
});

UI.registerHelper('isStudent', function(){
	return isStudent(Meteor.userId());
});