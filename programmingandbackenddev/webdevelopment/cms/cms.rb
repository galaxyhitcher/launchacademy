# cms.rb
require "sinatra"
require "sinatra/reloader"
require "tilt/erubis"
require "pry"


root = File.expand_path("..", __FILE__)

configure do
  enable :sessions
  set :session_secret, 'secret'
  set :erb, :escape_html => true
end

before do
  @files = Dir.glob(root + "/data/*").map do |path|
    File.basename(path)
  end
end

get "/" do
  erb :index
end

get "/:filename" do
  filename = params[:filename]
  file_path = root + "/data/" + filename

  if @files.include?(filename)
    headers["Content-Type"] = "text/plain"
    File.read(file_path)
  else
    session[:error] = "#{filename} does not exist"
    redirect "/"
  end
end