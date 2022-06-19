class CreateDrinks < ActiveRecord::Migration[6.1]
  def change
    create_table :drinks do |t|
      t.string :drink_type
      t.string :hydration_level
      t.references :user, null: false, foreign_key: true
      t.references :description, null: false, foreign_key: true

      t.timestamps
    end
  end
end
