class ImagesController < ApplicationController
  def index
  end
  
  def upload
      # Handle upload
      
      abort YAML::dump(params['picture'])
      
      # TODO: save params['picture'] and pass url to the view

      redirect_to "/"
  end
end
