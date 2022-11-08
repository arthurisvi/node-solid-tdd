import { Submission } from "../../domain/entities/Submission";
import { StudentRepository } from "../Repositories/StudentRepository";
import { ChallengeRepository } from "../Repositories/ChallengeRepository";


type CreateChallengeSubmissionRequest = {
    studentId: string;
    challengeId: string;
}

export class CreateChallengeSubmission{

    private studentRepository: StudentRepository
    private challengeRepository: ChallengeRepository

    constructor(studentRepository: StudentRepository, challengeRepository: ChallengeRepository){
        this.studentRepository = studentRepository
        this.challengeRepository = challengeRepository
    }

    async handle({ studentId, challengeId }: CreateChallengeSubmissionRequest) {
        
        const student = this.studentRepository.findById(studentId)

        if (!student) {
            throw new Error("Student not found")
        }

        const challenge = await this.challengeRepository.findById(challengeId)

        if (!challenge) {
            throw new Error("Challenge not found")
        }

        const submission = Submission.create({
            studentId,
            challengeId
        })

        return submission
    }
}