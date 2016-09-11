# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Recipe.create!([
  {name: "Bacon Grilled Cheese Sandwich",
   ingredients: ["2 slices of cheddar cheese", "1/4 pound of pulled pork", "2 pieces of bacon", "2 slices of bread", "1/2 cup of BBQ sauce", "1 tbs butter"],
   time: "30 minutes",
   steps: ["Cook bacon according to instructions", "Put pulled pork in pan and add in BBQ sauce. Cook for 5 minutes then put aside in bowl", "Spread butter on bread", "Put bread on pan and melt cheese on top", "Put cooked pulled pork and bacon on top", "Enjoy your delicious sandwich"],
   pictures: ["http://2.bp.blogspot.com/-WPMG_Q2OKKk/UWWUhsGZ5OI/AAAAAAAAVcI/rBdBv7VlxQ4/s800/Kimchi+and+Bacon+Grilled+Cheese+Sandwich+500+5619.jpg", "http://cdn1.bostonmagazine.com/wp-content/uploads/2015/04/GrilledCheese2015_Coda.jpg"]},
  {name: "Pad See Ew",
    ingredients: ["one pack of fat rice stick noodle", "2 tablespoons dark soy sauce", "2 teaspoons sweet or normal soy sauce", "2 tablespoons oyster sauce", "2 teaspoons white vinegar", "2 teaspoons white or brown sugar", "2 tablespoons water", "2 tablespoon peanut or vegetable oil", "2 cloves garlic", "1 cup chicken or beef", "1 large egg", "4 cups chinese broccoli"],
    time: "15 minutes",
    steps: ["Cut chinese broccili in diagonal slices", "Cut choice of meat into slices", "Mince 2 garlic gloves", "Put 2 tablespoons dark soy sauce in a bowl",
      "Put 2 tablespoons oyster sauce in the same bowl", "Put 2 teaspoons (one tablespoon = three teaspoons) soy sauce in the same bowl", "Put 2 teaspoons white vinegar in the same bowl",
      "Put 2 teaspoons brown or white sugar in the same bowl", "Put 2 tablespoons water in the same bowl", "Cook noodles according to instructions (maybe boil for a few minutes)", "Put 2 tablespoons peanut or vegetable oil in wok",
      "Put the minced garlic in the wok with the oil", "Wait for the garlic to turn golden", "Add chinese broccoli and choice of meat into wok and stir fry for one minute", "Move the chicken and broccoli to one side and crack in the egg. Scramble it", "Add the thick rice stick noodles and the sauce", "Gently combine everything together", "Enjoy your delicious pad see ew"],
    pictures: ["https://s-media-cache-ak0.pinimg.com/564x/db/ff/70/dbff70a63e29557a8599b15ff116a0bf.jpg", "https://thaifoodie.files.wordpress.com/2010/04/img_5542edit2.jpg"]},
    {name: "Roasted Brussel Sprouts with Balsamic Vinegar and Honey",
      ingredients: ["1.5 pounds brussel sprouts", "3 tablespoons extra virgin olive oil", "3/4 teaspoon salt", "1/2 teaspoon black pepper", "1 tablespoon balsamic vinegar", "1 teaspoon honey"],
      time: "30 minutes",
      steps: ["Cut each brussel sprout in half", "Preheat oven to 425 degrees", "In a large bowl, put in 2 tablespoons extra virgin olive oil", "In the same large bowl mix in the brussel sprouts, 3/4 teaspoon salt and 1/2 teaspoon black pepper",
      "Put baking sheet on top of a baking pan or some aluminum foil", "Transfer brussel sprout onto baking sheet", "Bake for about 20 minutes and stir occasionally to ensure even browning", "After baking but brussel sprouts back in the bowl",
      "Add remaining one tablespoon olive oil, one tablespoon balsamic vinegar and one teaspoon honey into bowl", "Toss to coat evenly", "Taste and add more salt or balsamic vinegar for your own personal taste", "Enjoy your delicious vegetables"],
      pictures: ["http://theliveinkitchen.com/wp-content/uploads/2013/10/web-brussels-sprouts-spoon.jpg"]
    },
    {name: "Bacon Alfredo Fettuccine",
      ingredients: ["1/2 box of fettuccine pasta", "2 jar of alfredo sauce of choice", "5 slices of bacon"],
      time: "20 minutes",
      steps: ["Boil pasta according to box instructions", "In another pan, cooked the bacon according to instructions",  "In another pan, combine the cooked pasta and 1.5 jar of alfredo sauce", "When the alfredo sauce is hot, turn off the fire",
      "When the bacon is done, let it cool for 30 seconds and break them up into tiny square pieces", "Combine the pasta and the bacon", "Enjoy your pasta"],
      pictures: ["http://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/47/18/14/piclU9zcA.jpg", "http://4.bp.blogspot.com/-drQbfTs53qc/TVhEQylc2QI/AAAAAAAAAcA/zphh1jr77yE/s1600/PICT0684.JPG"]
    }

])
