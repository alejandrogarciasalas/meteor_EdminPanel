// 'use strict';


Schemas = {};
UI.registerHelper("Schemas", Schemas);

Orgs = new Mongo.Collection("orgs");

Schemas.Org = new SimpleSchema({
  '_id': {
    type: String,
    optional: true
  },
  'createdAt': {
    type: Date,
    optional: true
  },
  'updatedAt': {
    type: Date,
    optional: true
  },
  'name': {
  	type: String,
    label: i18n.t('Name')
  },
  'description': {
  	type: String,
  	optional: true,
    label: i18n.t('Description')
  },
  'groupsRef': {
  	type: [String],
  	optional: true
  }
});

Orgs.attachSchema(Schemas.Org);

Orgs.allow({
  insert: function(userId, ticketObj) {
    return true;
  },
  update: function(userId, ticketObj) {
    return true;
  }
});