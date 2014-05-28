require 'rubygems'
require 'json'
require 'mongo'

db = Mongo::Connection.new.db("test")
collection = db.collection("users")

parsed = JSON.parse(File.read("public/member_information.json"))

parsed.each do |x|
	collection.insert("_id" => x[0])
	collection.update({"_id" => x[0]}, x[1])
end

