class FrontEndsController < ApplicationController


  def static
  end

  def index
  end

  def meet_up
    @meet_up = Untappd::Beer.info(params[:id])
    render json: @meet_up
  end


end
