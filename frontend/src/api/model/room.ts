/**
 * Generated by orval v6.27.1 🍺
 * Do not edit manually.
 * Hackathon DH API
 * WIP
 * OpenAPI spec version: 1.0
 */
import type { Users } from './users';
import type { Meeting } from './meeting';

export interface Room {
  createdBy: Users;
  description: string;
  id: number;
  meetings: Meeting[];
  name: string;
}
