require 'sinatra'
require 'slim'
require 'sass'

module Nikisound
  class Application < Sinatra::Base

    get '/' do
      slim :index
    end

    get '/stylesheets.css' do
      headers 'Content-Type' => 'text/css; charset=utf-8'
      sass :application
    end

  end
end
