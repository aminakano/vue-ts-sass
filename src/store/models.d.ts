export interface Quiz {
    category?: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
}