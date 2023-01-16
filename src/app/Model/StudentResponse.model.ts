import { RegisterStudent } from "./RegisterStudent.model";

export class StudentResponse{
  statusCode: string;
  description: string;
  responseDto:RegisterStudent;
}