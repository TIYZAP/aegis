class CreateGradChats < ActiveRecord::Migration[5.0]
  def change
    create_table :grad_chats do |t|

      t.timestamps
    end
  end
end
