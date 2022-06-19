class DrinksController < ApplicationController

    def index 
        render json: Drink.all
    end

    def show 
        drink = Drink.find(params[:id])
        render json: drink 
    end 

    def create 
        drink = Drink.create!(drink_params)
        render json: drink, status: :created
    end

    private 

    def drink_params 
        params.permit(:drink_type, :hydration_level, :user_id, :description_id)
    end
    
end
