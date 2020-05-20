class SearchController < ApplicationController
  def fetchbreeds
    breeds = Search.fetchAllBreeds
    if breeds != "Error Fetching Breeds"
      render json: breeds, status: 201
    else
      render json: {
        error: "Error Fetching Breeds"
        }, status: 404
    end
  end


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
