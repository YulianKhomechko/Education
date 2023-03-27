import mongoose from 'mongoose';

const exampleSchema = {
  name: String,
  living: Boolean,
  updated: { type: Date, default: Date.now },
  age: { type: Number, min: 18, max: 65 },
  mixed: mongoose.Schema.Types.Mixed,
  _someId: mongoose.Schema.Types.ObjectId,
  array: [],
  ofString: [String],
  ofNumber: [Number],
  ofDates: [Date],
  ofBoolean: [Boolean],
  ofMixed: [mongoose.Schema.Types.Mixed],
  ofObjectId: [mongoose.Schema.Types.ObjectId],
  ofArrays: [[]],
  ofArrayOfNumbers: [[Number]],
  nested: {
    stuff: { type: String, lowercase: true, trim: true },
  },
};

// All Schema Types
// required: boolean or function, if true adds a required validator for this property
// default: Any or function, sets a default value for the path. If the value is a function, the return value of the function is used as the default.
// select: boolean, specifies default projections for queries
// validate: function, adds a validator function for this property
// get: function, defines a custom getter for this property using Object.defineProperty().
// set: function, defines a custom setter for this property using Object.defineProperty().
// alias: string, mongoose >= 4.10.0 only. Defines a virtual with the given name that gets/sets this path.
// immutable: boolean, defines path as immutable. Mongoose prevents you from changing immutable paths unless the parent document has isNew: true.

// Indexes
// index: boolean, whether to define an index on this property.
// unique: boolean, whether to define a unique index on this property. // specifying `index: true` is optional if you do `unique: true`
// sparse: boolean, whether to define a sparse index on this property.

// String
// lowercase: boolean, whether to always call .toLowerCase() on the value
// uppercase: boolean, whether to always call .toUpperCase() on the value
// trim: boolean, whether to always call .trim() on the value
// match: RegExp, creates a validator that checks if the value matches the given regular expression
// enum: Array, creates a validator that checks if the value is in the given array.
// minLength: Number, creates a validator that checks if the value length is not less than the given number
// maxLength: Number, creates a validator that checks if the value length is not greater than the given number
// populate: Object, sets default populate options

// Number
// min: Number, creates a validator that checks if the value is greater than or equal to the given minimum.
// max: Number, creates a validator that checks if the value is less than or equal to the given maximum.
// enum: Array, creates a validator that checks if the value is strictly equal to one of the values in the given array.
// populate: Object, sets default populate options

// Date
// min: Date, creates a validator that checks if the value is greater than or equal to the given minimum.
// max: Date, creates a validator that checks if the value is less than or equal to the given maximum.
// expires: Number or String, creates a TTL index with the value expressed in seconds.

// ObjectId
// populate: Object, sets default populate options

//Dates
// Built-in Date methods are not hooked into the mongoose change tracking logic which in English means that if
// you use a Date in your document and modify it with a method like setMonth(), mongoose will be unaware of this change
// and doc.save() will not persist this modification. If you must modify Date types using built-in methods, tell
// mongoose about the change with doc.markModified('pathToYourDate') before saving.

export interface IUser {
  username: string;
  email: string;
  googleId: string;
  password: string;
  thumbnail: string;
  // Use `Types.ObjectId` in document interface...
  // organization: Types.ObjectId;
}

// mongoose.Schema.Types
// Schema types - String, Number, Boolean, Date, Mixed, Array, ObjectId, Schema
const userSchema = new mongoose.Schema<IUser>(
  {
    // username: String,
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    googleId: String,
    thumbnail: String,
    password: {
      type: String,
      select: false,
      validate: {
        validator: function () {
          return true;
        },
        message: (props: any) => `${props.value} is not a valid password`,
      },
    },
  },
  {
    collection: 'Users',
    strict: 'throw', // true | false | 'throw' - throw will cause an error instead of dropping bad data. default - true.
    // Ensures that properties that are not defined in our schema do not get saved into DB
    versionKey: false,
    // timestamps: {
    //   createdAt: 'otherName',
    //   updatedAt: 'anotherName',
    //   // currentTime: () => {},
    // },
    timestamps: true,
    validateBeforeSave: true, // boolean. default - true
    // define here for more convenience while using TS
    methods: {
      customMethod() {
        console.log('custom method');
      },
    },
    // Do not declare methods using ES6 arrow functions (=>). Arrow functions explicitly prevent binding this, so
    // your method will not have access to the document and the above examples will not work.
  }
);

// userSchema.methods.MethodName = function () {};

// use runValidators: true in options, to run validators when updating (update, updateOne, updateMany, findAndUpdate)
// they are turned off by default because they have several caveats
// Note that update(), updateMany(), findOneAndUpdate(), etc. do not execute save() middleware. If you need save
// middleware and full validation, first query for the document and then save() it.

export const User = mongoose.model<IUser>('User', userSchema);
