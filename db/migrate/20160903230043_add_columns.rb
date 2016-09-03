class AddColumns < ActiveRecord::Migration
  def change
    add_column :recipes, :name, :string
    add_column :recipes, :time, :string

  end
end
