# == Schema Information
#
# Table name: recipes
#
#  id          :integer          not null, primary key
#  ingredients :string           default([]), is an Array
#  steps       :string           default([]), is an Array
#  pictures    :string           default([]), is an Array
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  name        :string
#  time        :string
#

class Recipe < ActiveRecord::Base
end
