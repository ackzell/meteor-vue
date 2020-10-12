import SimpleSchema from 'simpl-schema';

export const processTypSchema = new SimpleSchema({
    _id: {
        type: String,
        regEx: SimpleSchema.RegEx.Id
    },
    name: {
        type: String,
        max: 40,
    }
});