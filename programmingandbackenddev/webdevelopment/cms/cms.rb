require "sinatra"
require "sinatra/reloader"
require "sinatra/content_for"
require "tilt/erubis"
require "sinatra/reloader" if development?
require "pry"

configure do
  enable :sessions
  set :session_secret, 'secret'
  set :erb, :escape_html => true
end

get "/" do
  erb :index
end

get "/:filename" do
  file_path = "../data/" + params[:filename]

  headers["Content-Type"] = "text/plain"
  File.read(file_path)
end