class SearchController < ApplicationController
  def index
    render json: Search.fetchApiData(params[:query]), status: 201
  end
end
