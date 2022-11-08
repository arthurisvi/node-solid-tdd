import { Challenge } from "../../domain/entities/Challenge";

export interface ChallengeRepository {
  findById(id: string): Promise<Challenge | null>
}