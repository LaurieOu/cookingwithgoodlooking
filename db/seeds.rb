# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Recipe.create!([
  {name: "Bacon Grilled Cheese Sandwich", ingredients: ["2 slices of cheddar cheese", "1/4 pound of pulled pork", "2 pieces of bacon", "2 slices of bread", "1/2 cup of BBQ sauce", "1 tbs butter"], time: "30 minutes", steps: ["Cook bacon according to instructions", "Put pulled pork in pan and add in BBQ sauce. Cook for 5 minutes then put aside in bowl", "Spread butter on bread", "Put bread on pan and melt cheese on top", "Put cooked pulled pork and bacon on top"], pictures: ["http://2.bp.blogspot.com/-WPMG_Q2OKKk/UWWUhsGZ5OI/AAAAAAAAVcI/rBdBv7VlxQ4/s800/Kimchi+and+Bacon+Grilled+Cheese+Sandwich+500+5619.jpg", "http://cdn1.bostonmagazine.com/wp-content/uploads/2015/04/GrilledCheese2015_Coda.jpg"]}

])
