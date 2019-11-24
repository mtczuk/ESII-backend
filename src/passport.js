const passport = require('passport');
const FacebookTokenStrategy = require('passport-facebook-token');

passport.use('facebookToken', new FacebookTokenStrategy({
  clientID: process.env.clientID,
  clientSecret: process.env.clientSecret,
}, async (accessToken, refreshToken, profile, done) => {
  try {
    console.log(profile.name);

    done();
  } catch (error) {
    done(error, false, error.message);
  }
}));

module.exports = passport;
