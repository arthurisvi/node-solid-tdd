import { CreateChallengeSubmission } from "../src/app/Services/create-challenge-submission"

describe('Create Challenge submission use case', () =>{
    it('should be able to create a new challenge submission', async () => {
        const sut = new CreateChallengeSubmission();

        const response = await sut.handle({
            studentId: 'fake-student-id',
            challengeId: 'fake-challenge-id',

        })

        expect(response).toBeTruthy()
    })
})