import mongoose, { Schema, Document } from 'mongoose';

export interface ITeacher extends Document {
  fname: string;
  lname: string;
  email: string;
  password: string;
  phoneNumber: string;
  gender: string;
  joiningDate: string;
  designation: string;
  department: string;
  education: string;
}

const teacherSchema: Schema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    joiningDate: {
      type: Date,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    education: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const teacherModel = mongoose.model<ITeacher>('Teacher', teacherSchema);
export default teacherModel;
