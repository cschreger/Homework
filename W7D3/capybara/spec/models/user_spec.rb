require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:user) {User.new(email: "hunter@aa.com", password: 'hunter12') }

  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_length_of(:password).is_at_least(6) }
end
