import { Submission } from "../../domain/entities/Submission";

type CreateChallengeSubmissionRequest = {
    studentId: string;
    challengeId: string;
}

export class CreateChallengeSubmission{
    async handle({studentId, challengeId}: CreateChallengeSubmissionRequest){

        const submission = Submission.create({
            studentId,
            challengeId
        })

        return submission
    }
}