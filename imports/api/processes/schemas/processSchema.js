import SimpleSchema from 'simpl-schema';
import processTypSchema from "../../processtypes/schemas/processTypSchema";

export const processSchema = new SimpleSchema({
    _id: {
        type: String,
        regEx: SimpleSchema.RegEx.Id
    },
    name: {
        type: String,
        max: 40,
    },
    processtype: processTypSchema,
});