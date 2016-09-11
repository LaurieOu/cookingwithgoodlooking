json.array! @recipes do |recipe|
  json.id recipe.id
  json.name recipe.name
  json.time recipe.time
  json.ingredients recipe.ingredients
  json.steps recipe.steps
  json.pictures recipe.pictures
end
