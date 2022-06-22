# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#Seeding descriptions
Description.create(content: 'Feeling hydrated AF!')
Description.create(content: 'Not feeling so great')
Description.create(content: 'Could use some more water')
Description.create(content: 'Liquid courage')
Description.create(content: 'Last drink of the day!')
Description.create(content: 'Almost fainted before this ...')
Description.create(content: 'On a roll today!')
Description.create(content: 'Getting those electrolytes')
Description.create(content: 'Dehydrated')
Description.create(content: 'Feeling pretty good.')

#Seeding drinks 
# Drink.create(drink_type: 'Coffee', hydration_level: '3', user_id: 1, description_id: 1)
# Drink.create(drink_type: 'Water', hydration_level: '9', user_id: 1, description_id: 2)
# Drink.create(drink_type: 'Gatorade', hydration_level: '7', user_id: 2, description_id: 3)
# Drink.create(drink_type: 'Wine', hydration_level: '3', user_id: 1, description_id: 4)
# Drink.create(drink_type: 'Beer', hydration_level: '3', user_id: 2, description_id: 5)
# Drink.create(drink_type: 'Tea', hydration_level: '5', user_id: 1, description_id: 1)
# Drink.create(drink_type: 'Kombucha', hydration_level: '8', user_id: 2, description_id: 2)

# #Seeding users 
# User.create(full_name: 'Jessica Newman', username: 'jess', password: '1234', password_confirmation: '1234', gender: 'F', weight: 140)
# User.create(full_name: 'Kaven Kim', username: 'kav', password: '5678', password_confirmation: '5678', gender: 'M', weight: 170)
