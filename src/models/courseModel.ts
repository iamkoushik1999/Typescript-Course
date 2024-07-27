import mongoose, { Schema, Document } from 'mongoose';
import { ITeacher } from './teacherModel';

export interface ICourse extends Document {
  name: string;
  code: string;
  startDate: string;
  duration: number;
  price: number;
  teacher: ITeacher['_id'];
  students: number;
  status: boolean;
  details: string;
}

const courseSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    teacher: {
      type: Schema.Types.ObjectId,
      ref: 'Teacher',
      required: true,
    },
    students: {
      type: Number,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const courseModel = mongoose.model<ICourse>('Course', courseSchema);
export default courseModel;
