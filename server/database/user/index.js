import mangoose from 'mangoose';

const UserSchema = new mongoose.Schema({
    fullname: { type: String, required: true},
    email: { type: String, required: true},
    password: {type: String },
    address: [{ details: {type: String}, for: {type: String} }],
    phoneNumber: [{type: Number}]
},{
    timestamps: true,
});

export const UserMode = mongoose.model('User', UserSchema);
