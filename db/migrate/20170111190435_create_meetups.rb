class CreateMeetups < ActiveRecord::Migration[5.0]
  def change
    create_table :meetups do |t|
      t.string :meetup_id
      t.string :name
      t.string :link
      t.text :description
      t.string :city
      t.string :state
      t.string :members
      t.string :image_id

      t.timestamps
    end
  end
end
