class User < ActiveRecord::Base
  # Remember to create a migration!
  has_many :users_teams
  has_many :teams, :through => :users_teams
end
