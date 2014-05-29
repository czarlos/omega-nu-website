Omega Nu
====
----

The repository for the Omega Nu website.

Please fork and issue pull requests for feature changes
that you are interested in implementing. If you are in Omega Nu
please contact the administrator to be added as a collaborator.

Current Developer Notes:

1. Setting up the DB (locally)
	..1. Spin up a mongod giving it a datapath, note on Ubuntu, a mongod will already be running, check this with 
something like: ps wuax | grep mongo
	..2. Open the mongo console and create a database "test" with a collection "users"
	..3. Import the current users from the JSON file using the ruby import script (db dump later)
2. Lots of hacky front-end javascript, lots of work to be done there. This is a great place to contribute!
