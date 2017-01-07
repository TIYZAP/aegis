Rails.application.routes.draw do

  devise_for :users
  root 'front_ends#static'


  scope '/api' do
    resources :grad_chats
    resources :back_ends

    resources :front_ends

    get '/:indytiy(/:random)' => 'front_ends#static'

  end




  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html




end
