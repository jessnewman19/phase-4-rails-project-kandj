class Drink < ApplicationRecord
  belongs_to :user
  belongs_to :description

  validates :drink_type, presence: true
end
