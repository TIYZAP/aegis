class MeetupSerializer < ActiveModel::Serializer
  attributes :name, :link, :description, :city, :state, :image, :members

  def image
  Refile.attachment_url(object, :image, :fit, 500, 500, format: "jpg")
  end
end
