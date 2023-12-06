import { Course } from '../../courses/models';
import { User } from '../../users/models';

export interface Enrollment {
  id: number;
  courseId: number;
  userId: number;
  user?: User;
  course?: Course;
  fecha: Date;
}

export interface CreateEnrollmentPayload {
  courseId: number | null;
  userId: number | null;
}