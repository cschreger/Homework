class UserMailer < ApplicationMailer
    default from: 'admin@cats.com'

    def welcome_email(user)
        @user = user
        @url  = 'http://ninetyninecats.com/'
        mail(to: user.email, subject: 'Welcome to My Awesome Cats site!')
    end
end
