class FrontEndsController < ApplicationController


  def static
  end

  def index
  end

  def meet_up
    @beer = Untappd::Beer.info(params[:id])
    render json: @beer
  end


end
