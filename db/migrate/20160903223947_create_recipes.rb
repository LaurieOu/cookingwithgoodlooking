class CreateRecipes < ActiveRecord::Migration
  def change
    create_table :recipes do |t|
      t.string :ingredients, array: true, default: []
      t.string :steps, array: true, default: []
      t.string :pictures, array: true, default: []

      t.timestamps null: false
    end
  end
end
