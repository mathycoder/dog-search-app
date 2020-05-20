class SearchController < ApplicationController
  def index
    images = Search.fetchApiData(params[:query])
    if images != "Unknown Breed"
      render json: images, status: 201
    else
      render json: {
        error: "Unknown Breed"
        }, status: 404
    end
  end
end
