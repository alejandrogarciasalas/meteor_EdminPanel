// 'use strict';

Tickets = new Mongo.Collection("tickets");

var Schemas = {};

Schemas.Ticket = new SimpleSchema({
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
  'ticketId': {
    type: String
  },
  'passPhrase': {
    type: String,
    label: i18n.t('Passphrase must be valid characters between A-Z or a-z only'),
    optional: true
  },
  'ticketFor': {
    type: String
  },
  'status': {
    type: String
  },
  'usersRef': {
    type: [String],
    optional: true
  },
  'limit': {
    type: Number
  }
});

Tickets.attachSchema(Schemas.Ticket);

Tickets.allow({
  insert: function(userId, ticketObj) {
    return true;
  }
});