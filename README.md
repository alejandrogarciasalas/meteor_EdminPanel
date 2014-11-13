### Meteor 1.0+ Boilerplate
---

##### Packages:

__Meteor__

- backbone
- accounts-base
- accounts-password
- email
- jquery

__Atmosphere__

- iron:router 
- meteorhacks:fast-render
- meteorhacks:subs-manager
- aldeed:collection2
- aldeed:simple-schema
- ground:db

__Custom__

__Not Removed Yet__

- autopublish
- insecure

##### Structure

This meteor project structure is a combination of Sacha's Greif [Telesc.pe](https://github.com/TelescopeJS/Telescope) & [radiegtya Meteoris Boilerplate](https://github.com/radiegtya/meteoris)

		client/
			helpers/ -- for javascript vendor plugin configuration and app helper objects
			stylesheets/ -- this file can later work as an independent package
			views/ -- file names are self explanatory except:
				auth/
				common/ -- for layout.html footer.html, not-found, loading...
				errors/
				nav/
			main.html
			main.js
		collections/
		lib/
			controllers/ -- AppViewsControllers which extend the MainController
				MainController.js -- Is an extension of the RouterController
			router.js
		packages/
		public/
			fonts/
			icons/
			img/
		server/
			publications/
