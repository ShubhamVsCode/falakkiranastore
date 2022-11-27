import mongoose,  { Schema } from "mongoose"
import AuthRoles from "../utils/authRoles"

const userSchema = Schema(
    {
    name: {
        type: String,
        maxLength: [50, "Name must be less than 50 character"],
        required: [true, "Name is required"]
    },
    email:{
        type: String,
        unique: [true, "Already registered with this email"] 
    },
    password:{
        type: String,
        required: true,
        minLength: [6, "Password must be atleast 6 character"],
        // select: false  // TODO:
    },
    role:{
        type: String,
        enum: Object.values(AuthRoles),
        default: AuthRoles.USER
    },
    forgotPasswordToken:{
        type: String
    },
    forgotPasswordExpiry:{
        type: Date
    }
}, 
{
    timestamps: true
});

export default mongoose.model("User", userSchema)