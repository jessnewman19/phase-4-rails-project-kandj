class Drink < ApplicationRecord
  belongs_to :user
  belongs_to :description

  validates :drink_type, presence: true
  validates :hydration_level, numericality: {greater_than_or_equal_to: 1, less_than_or_equal_to: 10}
end
