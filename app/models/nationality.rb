class Nationality

	include ActiveModel::Model
  	attr_accessor :ho, :nat, :hid

 
  validates :ho, presence: true
   validates :nat, presence: true

 end