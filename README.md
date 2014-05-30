Omega Nu
=========
--------
Welcome to the official repository for Omega Nu's website! Skip to the end to learn about contributing!

##Current Priorities##
  - Create basic login for team members
    - Users should be able to update their hover-over information in the database
  - Front end javascript needs to be restructured, pushing some current operations server-side
  - Slim down HTML via a templating engine

##About##
Check out [Omega Nu] [site]!:

> The goal of the website is to provide an
> overview of Omega Nu as an organization at Duke and 
> in particular, the Duke computer science community.
> The site is aimed at both providing information about
> members and finding new members.

If you have any suggestions for improvements that we could make please feel free to contribute or send us an [email][email]!
  

##Version##

1.0

##Technologies##

We utilized some awesome technologies to build the site!

* [Bootstrap] - A slick front-end framework.
* [node.js] - A blazing fast software platform for scalable server-side and networking applications.
* [express.js] - A simple, powerful node.js network application framework.
* [jQuery] - Better than sliced bread.
* [mongoDB] - A great NoSQL database!

##Installing##

#####Prepare the app#####
```sh
git clone git@github.com:czarlos/omega-nu-website.git
cd omega-nu-website/
mkdir data/
npm install
```
#####Start the database#####
```sh
mongodb --dbpath data/
```

#####Import the data (dev only, this is temporary!)#####

```sh
gem install mongo
gem install bson_ext
ruby importJSON.rb
```
#####Contributing#####
  1. If you're a current Omega Nu member send Carlos an email to be added as a contributor!
      - Commit anything you want, if you are making any major changes please make a new branch
  2. If you're not a member, considering applying, we'd love to have you on our team! 
      - Alternatively fork the repo and file a pull request.

#####Fire it up#####
```sh
npm start
```

**Enjoy!**

[mongoDB]:http://www.mongodb.org/
[email]:info@omeganu.us
[site]:http://omeganu.us
[node.js]:http://nodejs.org
[Bootstrap]:http://twitter.github.com/bootstrap/
[jQuery]:http://jquery.com
[express.js]:http://expressjs.com
