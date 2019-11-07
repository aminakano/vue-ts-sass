export interface Home {
    quizzes:Array<String>;
    categoryIds: Array<Number>;
    relatedQuestions: Array<String>;
    query:String;
    sortedData: Array<String>;
    ascending: boolean;
    btnContent: String;
    isLoaded: boolean;
}