require 'sinatra'
require 'sinatra/reloader'

get "/" do
  @title = "TECHー個人アプリーCAMP"
  erb :index
end

get "/info" do
  @title = "制作情報"
  erb :info
end

get "/game1" do
  @title = "game1"
  erb :game1
end

get "/game2" do
  @title = "game2"
  erb :game2
end