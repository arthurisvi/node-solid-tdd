import { CreateChallengeSubmission } from "../src/app/Services/create-challenge-submission"
import { Challenge } from "../src/domain/entities/Challenge"
import { Student } from "../src/domain/entities/Student"
import { InMemoryChallengesRepository } from "./repositories/in-memory-challenges-repository"
import { InMemoryStudentsRepository } from "./repositories/in-memory-students-repository"

describe('Create Challenge submission use case', () =>{
    it('should be able to create a new challenge submission', async () => {
        const studentRepository = new InMemoryStudentsRepository()
        const challengeRepository = new InMemoryChallengesRepository()

        const student = Student.create({
            name: "Arthur Isvi",
            email: "spfcarthur1@gmail.com"
        })

        const challenge = Challenge.create({
            title: "Challenge 1",
            instructionsUrl: "http://example.com"
        })

        studentRepository.items.push(student);
        challengeRepository.items.push(challenge);

        const sut = new CreateChallengeSubmission(
            studentRepository, 
            challengeRepository
        );

        const response = await sut.handle({
            studentId: student.id,
            challengeId: challenge.id

        })

        expect(response).toBeTruthy()
    })
})