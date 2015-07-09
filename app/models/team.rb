class Team < ActiveRecord::Base
  # Remember to create a migration!
  has_many :users_teams
  has_many :users, :through => :users_teams
end
