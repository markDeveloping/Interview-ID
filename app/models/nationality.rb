class Nationality

	include ActiveModel::Model
  	attr_accessor :ho, :nat

 
  validates :ho, presence: true
   validates :nat, presence: true

 end