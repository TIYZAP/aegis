class AddMeetupIdToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :meetup_id, :string
  end
end
