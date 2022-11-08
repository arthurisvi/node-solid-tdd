import { ChallengeRepository } from "../../src/app/Repositories/ChallengeRepository";
import { Challenge } from "../../src/domain/entities/Challenge";

export class InMemoryChallengesRepository implements ChallengeRepository {

  public items: Challenge[] = [];

  async findById(id: string): Promise<Challenge | null> {
    const challenge = this.items.find(challenge => challenge.id === id)

    return !challenge ? null : challenge
  }
}