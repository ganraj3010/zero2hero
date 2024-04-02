import { LightningElement, track } from 'lwc';

export default class QuizApp extends LightningElement {
    @track
    questions = [
        {
            "Id": 1,
            "Question": "What does LWC stand for?",
            "Options": [
                { "label": "Lightning Web Components", "value": "A" },
                { "label": "Lightweight Web Components", "value": "B" },
                { "label": "Long Web Components", "value": "C" },
                { "label": "Latest Web Components", "value": "D" }
            ],
            "correctAns": "A"
        },
        {
            "Id": 2,
            "Question": "Which programming language is primarily used to develop LWC?",
            "Options": [
                { "label": "Java", "value": "A" },
                { "label": "JavaScript", "value": "B" },
                { "label": "Python", "value": "C" },
                { "label": "C#", "value": "D" }
            ],
            "correctAns": "B"
        },
        {
            "Id": 3,
            "Question": "In LWC, what file extension is used for the component markup?",
            "Options": [
                { "label": ".html", "value": "A" },
                { "label": ".js", "value": "B" },
                { "label": ".cmp", "value": "C" },
                { "label": ".css", "value": "D" }
            ],
            "correctAns": "A"
        },
        {
            "Id": 4,
            "Question": "Which of the following is true about LWC?",
            "Options": [
                { "label": "It's an open-source framework", "value": "A" },
                { "label": "It's developed by Microsoft", "value": "B" },
                { "label": "It's used for server-side development", "value": "C" },
                { "label": "It's only used for mobile app development", "value": "D" }
            ],
            "correctAns": "A"
        },
        {
            "Id": 5,
            "Question": "What is the recommended way to communicate between components in LWC?",
            "Options": [
                { "label": "Global variables", "value": "A" },
                { "label": "Event handling", "value": "B" },
                { "label": "Direct DOM manipulation", "value": "C" },
                { "label": "Using synchronous functions", "value": "D" }
            ],
            "correctAns": "B"
        },
        {
            "Id": 6,
            "Question": "Which of the following is NOT a lifecycle hook in LWC?",
            "Options": [
                { "label": "connectedCallback", "value": "A" },
                { "label": "renderedCallback", "value": "B" },
                { "label": "disconnectedCallback", "value": "C" },
                { "label": "updateCallback", "value": "D" }
            ],
            "correctAns": "D"
        },
        {
            "Id": 7,
            "Question": "What is the main benefit of using LWC?",
            "Options": [
                { "label": "Increased performance", "value": "A" },
                { "label": "Complex syntax", "value": "B" },
                { "label": "Limited browser support", "value": "C" },
                { "label": "Heavy resource consumption", "value": "D" }
            ],
            "correctAns": "A"
        },
        {
            "Id": 8,
            "Question": "Which tool is used to create and manage LWC projects?",
            "Options": [
                { "label": "Visual Studio Code", "value": "A" },
                { "label": "Sublime Text", "value": "B" },
                { "label": "Eclipse", "value": "C" },
                { "label": "Notepad", "value": "D" }
            ],
            "correctAns": "A"
        },
        {
            "Id": 9,
            "Question": "What is the purpose of the @wire decorator in LWC?",
            "Options": [
                { "label": "Styling components", "value": "A" },
                { "label": "Handling events", "value": "B" },
                { "label": "Making server requests", "value": "C" },
                { "label": "Creating animations", "value": "D" }
            ],
            "correctAns": "C"
        },
        {
            "Id": 10,
            "Question": "Which of the following is NOT a core concept of LWC?",
            "Options": [
                { "label": "Encapsulation", "value": "A" },
                { "label": "Reactivity", "value": "B" },
                { "label": "Inheritance", "value": "C" },
                { "label": "Composition", "value": "D" }
            ],
            "correctAns": "C"
        }
    ]

    selectedOptions = {}
    correctAnsCount = 0;
    isSubmit = false;
    hadleChoice(event) {
        this.selectedOptions = { ...this.selectedOptions, [event.target.name]: event.detail.value }
    }

    get allSelected() {
        return Object.keys(this.selectedOptions).length !== this.questions.length
    }
    
    handleReset() {
        this.selectedOptions = {}
        let radioGroup = this.template.querySelectorAll('lightning-radio-group')
        radioGroup.forEach(element => {
            element.value = null
        });
        this.isSubmit = false
        this.questions = this.shuffleArray(this.questions)
    }
    
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }

    handleSubmit(event) {
        event.preventDefault()
        let correctAnsList = this.questions.filter(question => question.correctAns === this.selectedOptions[question.Id])
        this.correctAnsCount = correctAnsList.length;
        this.isSubmit = true
    }

    get msgCss(){
         return `slds-var-m-bottom_medium slds-text-heading_medium ${this.correctAnsCount === this.questions.length ? 'slds-text-color_success' : 'slds-text-color_error'}`
            }
}