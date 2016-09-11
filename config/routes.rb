Rails.application.routes.draw do
  root to: 'static_pages#root'
  resources :recipes, only: [:index, :show], format: 'json'
end
