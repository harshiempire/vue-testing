import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useQBStore = defineStore('qb', () => {
    // Mock chapters data
    const chapters = ref([
        {
            id: '1',
            name: 'Linear Equations',
            subject: 'Mathematics',
            class: '6A'
        },
        {
            id: '2',
            name: 'Integers',
            subject: 'Mathematics',
            class: '6A'
        }
    ]);
    // Mock questions bank with sample questions of each type
    const questions = ref([
        // MCQ Questions
        {
            id: '1',
            text: 'Which of the following is a linear equation?',
            type: 'mcq',
            cognitiveLevel: 'knowledge',
            marks: 1,
            chapterId: '1',
            options: [
                'y = x² + 2',
                'y = 2x + 3',
                'y = 1/x',
                'y = x³'
            ],
            correctAnswer: '1'
        },
        {
            id: '2',
            text: 'If x + 5 = 9, then x is equal to:',
            type: 'mcq',
            cognitiveLevel: 'understanding',
            marks: 1,
            chapterId: '1',
            options: [
                '2',
                '4',
                '14',
                '16'
            ],
            correctAnswer: '1'
        },
        // Long Answer Questions
        {
            id: '3',
            text: 'Explain the method to solve a linear equation with variables on both sides. Use an example to illustrate your answer.',
            type: 'long_answer',
            cognitiveLevel: 'application',
            marks: 5,
            chapterId: '1'
        },
        {
            id: '4',
            text: 'Solve the following system of equations and explain each step:\nx + 2y = 7\n2x - y = 1',
            type: 'long_answer',
            cognitiveLevel: 'application',
            marks: 5,
            chapterId: '1'
        },
        // Short Answer Questions
        {
            id: '5',
            text: 'Solve for x: 3x - 4 = 8',
            type: 'short_answer',
            cognitiveLevel: 'understanding',
            marks: 2,
            chapterId: '1'
        },
        {
            id: '6',
            text: 'What is the value of x if 2(x + 3) = 14?',
            type: 'short_answer',
            cognitiveLevel: 'understanding',
            marks: 2,
            chapterId: '1'
        },
        // True/False Questions
        {
            id: '7',
            text: 'A linear equation always has exactly one solution.',
            type: 'true_false',
            cognitiveLevel: 'knowledge',
            marks: 1,
            chapterId: '1',
            correctAnswer: 'false'
        },
        {
            id: '8',
            text: 'The graph of a linear equation is always a straight line.',
            type: 'true_false',
            cognitiveLevel: 'knowledge',
            marks: 1,
            chapterId: '1',
            correctAnswer: 'true'
        },
        // Match the Following
        {
            id: '9',
            text: 'Match the following equations with their solutions:',
            type: 'match_following',
            cognitiveLevel: 'understanding',
            marks: 4,
            chapterId: '1',
            options: [
                { column1: 'x + 2 = 5', column2: 'x = 3' },
                { column1: '2x = 8', column2: 'x = 4' },
                { column1: 'x - 3 = 0', column2: 'x = 3' },
                { column1: '3x = 9', column2: 'x = 3' }
            ]
        },
        // Matrix Matching
        {
            id: '10',
            text: 'Match the equations in Column I with their characteristics in Column II:',
            type: 'matrix_matching',
            cognitiveLevel: 'hots',
            marks: 4,
            chapterId: '1',
            options: {
                column1: ['2x + 3 = 7', 'x = 5', '0x = 0', '2x + 3 = 2x + 4'],
                column2: ['Has one solution', 'Identity equation', 'No solution', 'Infinite solutions']
            }
        },
        // Assertion and Reasoning
        {
            id: '11',
            text: 'Assertion (A): Every linear equation in one variable has exactly one solution.\nReason (R): A linear equation represents a straight line on a graph.',
            type: 'assertion_reasoning',
            cognitiveLevel: 'hots',
            marks: 4,
            chapterId: '1',
            options: [
                'Both A and R are true and R is the correct explanation of A',
                'Both A and R are true but R is not the correct explanation of A',
                'A is true but R is false',
                'A is false but R is true'
            ]
        },
        // Case Based Questions
        {
            id: '12',
            text: 'Ram is solving equations. He comes across the equation 2x + 3 = 7. He solves it as follows:\n2x + 3 = 7\n2x = 7 + 3\n2x = 10\nx = 5\n\nQuestion 1: Is Ram\'s solution correct?\nQuestion 2: What is the error in his steps, if any?\nQuestion 3: What is the correct solution?',
            type: 'case_based',
            cognitiveLevel: 'application',
            marks: 6,
            chapterId: '1'
        },
        // Fill in the Blanks
        {
            id: '13',
            text: 'In the equation ax + b = c, if a = 0 and b ≠ c, then the equation has _______ solution(s).',
            type: 'fill_blanks',
            cognitiveLevel: 'understanding',
            marks: 1,
            chapterId: '1',
            correctAnswer: 'no'
        },
        {
            id: '14',
            text: 'If an equation has the same variable on both sides with the same coefficient, it has _______ solutions.',
            type: 'fill_blanks',
            cognitiveLevel: 'understanding',
            marks: 1,
            chapterId: '1',
            correctAnswer: 'infinite'
        }
    ]);
    // Paper templates
    const paperTemplates = ref([
        {
            id: '1',
            name: 'Standard Template',
            hasSchoolName: true,
            hasLogo: true,
            optionsLayout: 'vertical',
            showMarks: true,
            showTime: true,
            headerStyle: 'standard'
        },
        {
            id: '2',
            name: 'Minimal Template',
            hasSchoolName: false,
            hasLogo: false,
            optionsLayout: 'horizontal',
            showMarks: true,
            showTime: true,
            headerStyle: 'minimal'
        }
    ]);
    // Created question papers
    const questionPapers = ref([]);
    const getQuestionsByChapter = (chapterId) => questions.value.filter(q => q.chapterId === chapterId);
    const getQuestionsByType = (type) => questions.value.filter(q => q.type === type);
    const getQuestionsByCognitiveLevel = (level) => questions.value.filter(q => q.cognitiveLevel === level);
    const createQuestionPaper = (paper) => {
        const newPaper = {
            ...paper,
            id: crypto.randomUUID(),
            createdAt: new Date().toISOString()
        };
        questionPapers.value.push(newPaper);
        return newPaper;
    };
    const updateQuestionPaper = (paper) => {
        const index = questionPapers.value.findIndex(p => p.id === paper.id);
        if (index !== -1) {
            questionPapers.value[index] = paper;
        }
    };
    const autoGeneratePaper = (chapters, distribution, totalMarks) => {
        // For demo purposes, return a mix of different question types
        return questions.value.slice(0, 10);
    };
    return {
        chapters,
        questions,
        paperTemplates,
        questionPapers,
        getQuestionsByChapter,
        getQuestionsByType,
        getQuestionsByCognitiveLevel,
        createQuestionPaper,
        updateQuestionPaper,
        autoGeneratePaper
    };
});
