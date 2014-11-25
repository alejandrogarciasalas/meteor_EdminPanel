// 'use strict';

Orgs = new Mongo.Collection("orgs");

Schemas = {};

Schemas.Org = new SimpleSchema({
  '_id': {
    type: String,
    optional: true
  },
  'createdAt': {
    type: Date
  },
  'updatedAt': {
    type: Date
  },
  'name': {
  	type: String
  },
  'description': {
  	type: String,
  	optional: true
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