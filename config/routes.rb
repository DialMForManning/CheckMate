Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create]
    resource :session, only: [:create, :destroy]
    resource :friendships, only: [:create, :update, :destroy]
    resources :expenses, only: [:create, :update, :destroy]
    resources :transactions, only: [:destroy]
    resources :expenses do
      resources :comments, only: [:create]
    end
    resources :comments, only: [:update, :index, :destroy]
  end
  
  post 'api/friends/:id/transactions', to: 'api/transactions#create', defaults: { format: :json }

  get 'api/balances', to: 'api/users#balances', defaults: { format: :json }
  get 'api/friends/:id/expenses', to: 'api/expenses#index', defaults: { format: :json }
  get 'api/friends', to: 'api/friends#index', defaults: { format: :json }

  post 'api/users/search', to: 'api/users#index', defaults: { format: :json }
end
