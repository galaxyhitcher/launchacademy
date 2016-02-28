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