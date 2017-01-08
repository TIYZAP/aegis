class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

  devise :database_authenticatable, :registerable,
  :recoverable, :rememberable, :trackable, :validatable,
  :omniauthable, omniauth_providers: [:meet_up]
  acts_as_token_authenticatable


  attachment :image, type: :image

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.password = Devise.friendly_token[0, 20]
      user.name = auth.info.name
      user.remote_image_url = auth.info.image
      user.access_token = auth.credentials.token
      user.client_id = auth.extra.raw_info.id
    end
  end

  def show
  end

  def after_sign_in_path_for(_resource)
    @user = User.find(params[:id])
    user_path(current_user)
  end

end
