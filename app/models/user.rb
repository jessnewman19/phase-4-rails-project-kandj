class User < ApplicationRecord
    has_secure_password
    has_many :drinks 
    has_many :descriptions, through: :drinks

    validates :username, presence: true, uniqueness: true 
    validates :password, presence: true
    validates :full_name, presence: true
    validates :password_confirmation, presence: true
    validates :gender, presence: true
    validates :weight, presence: true
end
