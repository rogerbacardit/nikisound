require 'sinatra'
require 'slim'
require 'sass'

get '/' do
  "hello world"
end


get '/' do
  slim :index
end

get '/stylesheet.css' do
  sass :stylesheet
end
