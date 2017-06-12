class NationalitiesController < ApplicationController

	def new
		@nationality = Nationality.new
	end

	def create
    @nationality = Nationality.new(nationality_params)

    respond_to do |format|
      if @nationality.valid?
        format.html { redirect_to results_path(ho: @nationality.ho, nat:@nationality.nat) }
      else
        format.html { render :new }
      end
  	end
    end
	
	def results
		
	end

private

# Never trust parameters from the scary internet, only allow the white list through.
    def nationality_params
      params.require(:nationality).permit(:nat, :ho)
    end
	
end
