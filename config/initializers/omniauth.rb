Rails.application.config.middleware.use OmniAuth::Builder do
  provider :meetup, ENV['meetup_api']


end
