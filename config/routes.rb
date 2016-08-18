Rails.application.routes.draw do
  resources :books
  resources :publishing_houses
  resources :authors
  mount_ember_app :frontend, to: "/"
end
