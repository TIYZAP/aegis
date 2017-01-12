class Meetup < ApplicationRecord
  validates_presence_of :name, :link, :description, :city, :state, :meetup_id
  attachment :image
end
