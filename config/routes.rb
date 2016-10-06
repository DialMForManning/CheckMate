Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resource :friendships, only: [:create, :update, :destroy]
    resource :friends, only: [:index]
  end

  get 'api/friends', to: 'api/friends/#index', defaults: { format: :json }
end
