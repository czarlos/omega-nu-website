[Omega Nu][site]
=========
Welcome to the official repository for Omega Nu's website! Skip to the end to learn about contributing!

[![Build Status](https://travis-ci.org/czarlos/omega-nu-website.svg?branch=master)](https://travis-ci.org/czarlos/omega-nu-website)

##Current Priorities and Status##
  - We’ve moved from Heroku to a Duke Innovation Co-lab VM
  - Use GridFS to store user profile images
  - Add technologies images for user's profiles
  - Add Github language statistics for users
  - Make a cool logo for Omega Nu
  - Set up Omega Nu email
  - Add author tags for projects
  - Add admin console for adding new users
  - Set environment variables on VM that indicate production environment

##About##
Check out [Omega Nu] [site].

> The goal of the website is to provide an
> overview of Omega Nu as an organization at Duke and 
> in particular, the Duke computer science community.
> The site is aimed at both providing information about
> members and finding new members.

If you have any suggestions for improvements that we could make please feel free to contribute or send us an [email][email]!


##Version##

1.1

##Technologies##

We utilized some awesome technologies to build the site!

* [Bootstrap] - Slick front-end framework.
* [node.js] - Blazing fast software platform for scalable server-side and networking applications.
* [express.js] - Simple, powerful node.js network application framework.
* [jQuery] - Better than sliced bread.
* [mongoDB] - A great NoSQL database!
* [mongoose] - Provides object modeling for node.js
* [MongoLab] - MongoDB as a service.
* [Travis CI] - Continuous automated testing.
* [qTip2] - Awesome tooltips!

##Contributing##
  1. If you're a current Omega Nu member send Carlos an email to be added as a contributor!
      - Commit anything you want, if you are making any major changes please make a new branch
      - Forking your own copy is fine too!
  2. If you're not a member, considering applying, we'd love to have you on our team! 
      - Alternatively fork the repo and file a pull request.

##Guidelines##
  1. Please don't push to the 'static_site' branch, it preserves a non-webapp version of the site.
  2. Take care when pushing to the release branch not to overwrite any of the VM specific settings.
     - We'll add appropriate protective measures soon.
  3. Make sure not to include any sensitive information in the repo (passwords, etc).
  4. What happens on release, stays on release, do not pull from release if you are on another branch, only push to it.
  5. Please rebase your branch before issuing a pull request.

##Running Locally##

#####Prepare the app#####
```sh
git clone git@github.com:czarlos/omega-nu-website.git
cd omega-nu-website/
mkdir data/
npm install
```
#####Start the database#####
```sh
mongod --dbpath data/
```

#####Import the data (dev only, this is temporary!)#####

```sh
gem install mongo
gem install bson_ext
ruby importJSON.rb
```

#####Generate a self-signed SSL certificate (or just switch to http in app.js)#####
```sh
mkdir keys && cd keys/
openssl req -x509 -newkey rsa:2048 -keyout key.pem -out key-cert.pem -days XXX
```

#####Fire it up#####
```sh
npm start
```

Alternatively use nodemon (npm install -g nodemon)
#####Start using Nodemon#####
```sh
nodemon app.js
```

**Enjoy!**

[MongoLab]: http://mongolab.com/
[mongoose]:http://mongoosejs.com/
[mongoDB]:http://www.mongodb.org/
[email]:cer26@duke.edu
[site]:http://omeganu.us
[node.js]:http://nodejs.org
[Bootstrap]:http://twitter.github.com/bootstrap/
[jQuery]:http://jquery.com
[express.js]:http://expressjs.com
[Travis CI]:https://travis-ci.org/
[qTip2]:http://qtip2.com/
