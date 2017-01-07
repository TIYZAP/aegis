class CreateBackEnds < ActiveRecord::Migration[5.0]
  def change
    create_table :back_ends do |t|

      t.timestamps
    end
  end
end
