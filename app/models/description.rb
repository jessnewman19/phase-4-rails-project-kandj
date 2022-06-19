class Description < ApplicationRecord
    has_many :drinks 
    has_many :users, through: :drinks
end
