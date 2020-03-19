require 'sinatra'
require 'sinatra/reloader'

get "/" do
  @title = "TECHー個人アプリーCAMP"
  erb :index
end

get "/game1" do
  @title = "game1"
  erb :game1
end