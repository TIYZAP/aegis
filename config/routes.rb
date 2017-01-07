Rails.application.routes.draw do

  root 'front_ends#static'

  resources :front_ends


  get '/:indytiy(/:random)' => 'front_ends#static'





  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html




end
