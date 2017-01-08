Rails.application.routes.draw do
  devise_for :users
  root 'front_ends#static'
  scope '/api' do
    resources :grad_chats
    resources :back_ends
    resources :front_ends
      get '/meetup' => 'front_ends#meet_up'
  end
  devise_for :users, controllers: {
  omniauth_callbacks: "users/omniauth_callbacks"
}

  get '/:indytiy(/:random)' => 'front_ends#static'
end
