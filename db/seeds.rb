# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#Seeding descriptions
Description.create(header: 'Feeling hydrated AF!', body: 'Drink was refreshing', location: 'Home')
Description.create(header: 'Not feeling so great', body: 'Need some water', location: 'Home')
Description.create(header: 'Ready for my workout', body: 'Heading to the gym', location: 'Gym')
Description.create(header: 'Yummy', body: 'Hydrated as heck.', location: 'Home')
Description.create(header: 'Glass of wine with dinner', body: 'Liquid courage', location: 'Restaurant')

#Seeding drinks 
Drink.create(drink_type: 'coffee', hydration_level: '3', user_id: 1, description_id: 1)
Drink.create(drink_type: 'water', hydration_level: '9', user_id: 1, description_id: 2)
Drink.create(drink_type: 'gatorade', hydration_level: '7', user_id: 2, description_id: 3)
Drink.create(drink_type: 'wine', hydration_level: '3', user_id: 1, description_id: 4)
Drink.create(drink_type: 'beer', hydration_level: '3', user_id: 2, description_id: 5)
Drink.create(drink_type: 'tea', hydration_level: '5', user_id: 1, description_id: 1)
Drink.create(drink_type: 'kombucha', hydration_level: '8', user_id: 2, description_id: 2)

# #Seeding users 
# User.create(full_name: 'Jessica Newman', username: 'jess', password: '1234', password_confirmation: '1234', gender: 'F', weight: 140)
# User.create(full_name: 'Kaven Kim', username: 'kav', password: '5678', password_confirmation: '5678', gender: 'M', weight: 170)
