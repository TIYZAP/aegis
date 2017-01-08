class AddMeetupaccesToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :meetup_token, :string
  end
end
