class CreateDescriptions < ActiveRecord::Migration[6.1]
  def change
    create_table :descriptions do |t|
      t.string :header
      t.string :body
      t.string :location

      t.timestamps
    end
  end
end
