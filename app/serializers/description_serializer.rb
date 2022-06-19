class DescriptionSerializer < ActiveModel::Serializer
  attributes :id, :header, :body, :location
end
