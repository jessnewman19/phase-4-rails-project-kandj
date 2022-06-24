class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :username, :password_digest, :gender, :weight

  has_many :drinks
  has_many :descriptions, through: :drinks
end
