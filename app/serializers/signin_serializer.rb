class SigninSerializer < ActiveModel::Serializer
  attributes :id

  def image
    Refile.attachment_url(object, :image, :fit, 200, 200, format: "jpg")
  end
end
