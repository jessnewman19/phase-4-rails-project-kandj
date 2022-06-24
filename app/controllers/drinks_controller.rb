class DrinksController < ApplicationController

    # Implementing the below line of code when looking at data in Postman
    skip_before_action :authorize
    
    def index 
        render json: Drink.all
    end

    def show 
        drink = Drink.find(params[:id])
        render json: drink 
    end 

    def create 
        drink = @current_user.drinks.create!(drink_params)
        render json: drink, status: :created
    end

    def destroy 
        drink = Drink.find(params[:id])
        drink.destroy
        render json: {}
    end

    def update
        drink = Drink.find(params[:id])
        drink.update!(drink_params)
        render json: drink, status: :ok
    end



    private 

    def drink_params 
        params.permit(:drink_type, :hydration_level, :location, :user_id, :description_id)
    end

    def update_drink_params 
        params.permit(:drink_type, :hydration_level, :location)
    end
    
end
