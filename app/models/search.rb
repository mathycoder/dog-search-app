class Search < ApplicationRecord
  def self.fetchApiData(query)
    resp = Faraday.get("https://dog.ceo/api/breed/#{query}/images/random/9") do |req|
    end
    if resp.status == 404
      "Unknown Breed"
    else
      resp = JSON.parse(resp.body)
    end
  end
end
