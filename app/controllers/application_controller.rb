class ApplicationController < ActionController::Base



  private

  def current_user
    @current_user ||= User.find_by(api_token: params[:api_token])
  end

end
