// 'use strict';

Schemas = {};

Schemas.User = new SimpleSchema({
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
  'emails': {
  	type: [Object],
  	optional: true
  },
  'emails.$.address': {
  	type: String
  },
  'emails.$.verified': {
  	type: Boolean
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true
  },
	'name': {
		type: String,
		optional: true
	},
	'lastname': {
		type: String,
		optional: true
	},
	'type': {
		type: String,
		optional: true
	},
	'assets': {
		type: Object,
		optional: true
	},
	'assets.$.docsRef': {
		type: String,
		optional: true
	},
	'assets.$.videoRef': {
		type: String,
		optional: true
	},
	'assets.$.imgRef': {
		type: String,
		optional: true
	},
	'info': {
		type: Object,
		optional: true
	},
	'info.$.gender': {
		type: String,
		optional: true
	},
	'info.$.birthday': {
		type: String,
		optional: true
	},
	'address': {
		type: Object,
		optional: true
	},
	'address.$.ZIP': {
		type: String,
		optional: true
	},
	'address.$.street': {
		type: String,
		optional: true
	},
	'address.$.country': {
		type: String,
		optional: true
	},
	'address.$.city': {
		type: String,
		optional: true
	},
	'orgRef': {
		type: String,
		optional: true
	}
});

Meteor.users.attachSchema(Schemas.User);

Meteor.users.allow({
	update: function(userId, doc) {return true; },
	insert: function(userId, doc) {return true; }
});