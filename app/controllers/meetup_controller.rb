class MeetupController < ApplicationController

  def index
    meetups = Meetup.all
    render json: meetups
  end

  def upcoming_events
    params = { category: '34',
      city: 'Indianapolis',
      country: 'USA',
      status: 'upcoming',
      zip: '46204',
      format: 'json',
      page: '20'}
      meetup_api = MeetupApi.new
      @events = meetup_api.open_events(params)
      render json: @events
  end

end
