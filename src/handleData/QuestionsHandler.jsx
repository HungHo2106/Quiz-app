import questionsdb from "../data/questions.json";

class QuestionHandler {
  questions = [];

  constructor() {
    this.questions = questionsdb;
  }

  get getAllQuestions() {
    return this.questions.map((question) => {
      const { answers } = question;
      return {
        ...question,
        answers: answers.map((answer) => ({ ...answer, clicked: false })),
      };
    });
  }
}

const questionHandler = new QuestionHandler();

export default questionHandler;
