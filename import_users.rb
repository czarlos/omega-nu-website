require 'rubygems'
require 'json'
require 'mongo'

db = Mongo::Connection.new.db("test")
collection = db.collection("users")

users = JSON.parse(File.read("public/member_information.json"))

users.each do |u|
	collection.insert("_id" => u[0])
	collection.update({"_id" => u[0]}, u[1])
end


