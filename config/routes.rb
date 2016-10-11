Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create]
    resource :session, only: [:create, :destroy]
    resource :friendships, only: [:create, :update, :destroy]
    resources :expenses, only: [:create, :update, :destroy]
  end

  get 'api/friends/:id/expenses', to: 'api/expenses#index', defaults: { format: :json }
  get 'api/friends', to: 'api/friends#index', defaults: { format: :json }
  post 'api/users/search', to: 'api/users#index', defaults: { format: :json }
end
