import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { User } from '../models/User';

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID as string,
      clientSecret: GOOGLE_CLIENT_SECRET as string,
      // where to redirect when user give a consent to share information
      callbackURL: '/auth/google/redirect',
      scope: ['profile', 'email'],
    },
    (accessToken, refreshToken, profile, done) => {
      // passport callback function
      // console.log(JSON.stringify(profile, null, 4));

      const userEmail = profile.emails![0].value;

      User.findOneAndUpdate(
        { email: userEmail },
        { googleId: profile.id, username: profile.displayName, thumbnail: profile._json.picture },
        { upsert: true },
        (error, doc) => {
          if (error) {
            done(error);
          }

          done(null, doc as Express.User);
        }
      );
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((id, done) => {
  User.findOne({ _id: id }).then((user) => {
    done(null, user);
  });
});

export { passport };
