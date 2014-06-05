require 'rubygems'
require 'json'
require 'mongo'

db = Mongo::MongoClient.from_uri("mongodb://omeganu:omeganu1@ds061787.mongolab.com:61787/omeganu").db("omeganu")
collection = db.collection("users")

#db.authenticate("omeganu","omeganu1")

parsed = JSON.parse(File.read("public/member_information.json"))

parsed.each do |x|
	collection.insert("_id" => x[0])
	collection.update({"_id" => x[0]}, x[1])
end

