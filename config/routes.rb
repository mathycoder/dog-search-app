Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/search/:query', to: 'search#index'
  get '/fetchbreeds', to: 'search#fetchbreeds'
end
