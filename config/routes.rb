Rails.application.routes.draw do
  root 'front_ends#static'
  get "users/show"
  scope '/api' do
    resources :grad_chats
    resources :back_ends
    resources :front_ends
    get '/meetup/index' => 'meetup#index'
  end
  devise_for :users, controllers: {
    omniauth_callbacks: "users/omniauth_callbacks",
    registrations: 'users/registrations'
  }

  get '/:indytiy(/:random)' => 'front_ends#static'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
