require 'rubygems'
require 'json'
require 'mongo'

db = Mongo::Connection.new.db("test")
collection = db.collection("projects")

projects = JSON.parse(File.read("public/project_information.json"))

projects.each do |p|
	collection.insert("_id" => p[0])
	collection.update({"_id" => p[0]}, p[1])
end