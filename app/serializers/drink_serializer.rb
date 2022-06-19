class DrinkSerializer < ActiveModel::Serializer
  attributes :id, :drink_type, :hydration_level
  has_one :user
  has_one :description
end
