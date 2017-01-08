class FrontEndsController < ApplicationController


  def static
  end

  def index
  end

  def meet_up
    request = Typhoeus::Request.get(
      'https://api.meetup.com/find/groups?',
      method: :get,
      params: {
        :'photo-host' => 'public',
        page: 10,
        sig_id: 209483447,
        category: 34,
        sig: 'dbcf4e2b2b00d29075fec95599b6c76982658dae'
        }
      )
    parsed = JSON.parse(request.body)
    render json: parsed
  end


end
