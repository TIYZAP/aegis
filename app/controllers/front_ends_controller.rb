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
        page: 20,
        sig_id: 199727819,
        category: 34,
        sig: '5161f91e824504f8609ee47af53bfefb8fddb8a3'
        }
      )
    parsed = JSON.parse(request.body)
    render json: parsed
  end


end
