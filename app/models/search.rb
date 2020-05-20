class Search < ApplicationRecord
  def self.fetchApiData(query)
    breed = query.split("-")[0]
    resp = Faraday.get("https://dog.ceo/api/breed/#{breed}/images/random/9") do |req|
    end
    if resp.status == 404
      "Unknown Breed"
    else
      resp = JSON.parse(resp.body)
    end
  end
end
