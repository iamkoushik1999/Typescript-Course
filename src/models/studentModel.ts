import mongoose, { Schema, Document } from 'mongoose';
import { ICourse } from './courseModel';

export interface IStudent extends Document {
  fname: string;
  lname: string;
  email: string;
  phoneNumber: string;
  gender: string;
  registrationDate: Date;
  IDNumber: number;
  course: ICourse['_id'];
  parentName: number;
  parentPhoneNumber: string;
  dob: Date;
  bloodgroup: string;
}

const studentSchema: Schema = new Schema(
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
    phoneNumber: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    registrationDate: {
      type: Date,
      required: true,
    },
    IDNumber: {
      type: Number,
      required: true,
    },
    course: {
      type: Schema.Types.ObjectId,
      ref: 'Course',
      required: true,
    },
    parentName: {
      type: String,
      required: true,
    },
    parentPhoneNumber: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    bloodgroup: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const studentModel = mongoose.model<IStudent>('Student', studentSchema);
export default studentModel;
