class MeetupController < ApplicationController

  def index
    @meetups = Meetup.all
    render json: @meetups
  end
end
