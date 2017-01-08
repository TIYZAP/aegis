Rails.application.routes.draw do
  root 'front_ends#static'
<<<<<<< HEAD
=======

  get "users/show"

>>>>>>> be13599b6d7c6e6a4397d1d4bca30d94c1465c2d
  scope '/api' do
    resources :grad_chats
    resources :back_ends
    resources :front_ends
    get '/meetup' => 'front_ends#meet_up'
  end
  devise_for :users, controllers: {
  omniauth_callbacks: "users/omniauth_callbacks"
}

<<<<<<< HEAD
  get '/:indytiy(/:random)' => 'front_ends#static'
=======
  devise_for :users, controllers: {
    omniauth_callbacks: "users/omniauth_callbacks",
    registrations: 'users/registrations'
  }

  get '/:indytiy(/:random)' => 'front_ends#static'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
>>>>>>> be13599b6d7c6e6a4397d1d4bca30d94c1465c2d
end
