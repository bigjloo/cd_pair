require 'byebug'

get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/' do
  byebug
end