class DescriptionsController < ApplicationController
    # Authorize not working properly here. Need to figure out. 
    skip_before_action :authorize

    def index 
        render json: Description.all
    end

    def show 
        description = Description.find(params[:description_id])
        render json: :description
    end

end
