class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :username, :password_digest, :gender, :weight
end
