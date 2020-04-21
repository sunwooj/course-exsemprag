// Day 2, section 2 of the tutorial
// Define new controllers

define_ibex_controller({
    name: "MyController1",
    jqueryWidget: {
        _init: function () {
            this.options.transfer = null; // Remove 'click to continue message'. 
            this.element.VBox({
                options: this.options,
                triggers: [1],
                children: [
                    "Message", this.options,
                    "AcceptabilityJudgment", this.options,
                ]
            });
        }
    },
    properties: {}
});


define_ibex_controller({
    name: "MyController2",
    jqueryWidget: {
        _init: function () {
            this.options.transfer = null;
            this.element.VBox({
                options: this.options,
                triggers: [1],
                children: [
                    "Message", this.options,
                    "Question", this.options,
                ]
            });
        }
    },
    properties: {}
});


var items = [

// Transitions (not activated for now)
// ["sep", "Separator", { }],

// Adding counter (for keeping track of Latin Square)
["setcounter", "__SetCounter__", { }],

// Section 1 in the tutorial: 
// Bringing in external Intro chunk
["introduction", "Message", { 
    html: { include: "tutorial-intro.html" }
    }
],

// Configuring main/filler trials
// Sample trials with pictures
[["main-pall-ssome", 1], "MyController1",
    {
        html: "<center><img src='https://sunwooj.github.io/course-exsemprag/IBEX/images/sleep-all.png' alt='imagefile' width='480'></center>",
        s: "Some animals are sleeping."
    }
],

[["main-pall-sall", 1], "MyController1",
    {
        html: "<center><img src='https://sunwooj.github.io/course-exsemprag/IBEX/images/sleep-all.png' alt='imagefile' width='480'></center>",
        s: "All animals are sleeping."
    }
],

[["main-psome-ssome", 2], "MyController1",
    {
        html: "<center><img src='https://sunwooj.github.io/course-exsemprag/IBEX/images/sleep-some.png' alt='imagefile' width='480'></center>",
        s: "Some animals are sleeping."
    }
],

[["main-psome-sall", 2], "MyController1",
    {
        html: "<center><img src='https://sunwooj.github.io/course-exsemprag/IBEX/images/sleep-some.png' alt='imagefile' width='480'></center>",
        s: "All animals are sleeping."
    }
],

// A sample trial with an auditory stimulus
["practice-audio", "MyController2",
    {
        html: "<center><audio controls><source src='http://hosting02.snu.ac.kr/~sunwooj/experiments/veridicality/painter-al-jul1-p4.wav' type='audio/wav'></audio></center>",
        q: "Which is true?",
        as: ["Is a painter", "Is not a painter"]
    }
],

// A sample exit questionnaire with Form controller
["exitqs", "Form", {
    html: { include: "demographic-form.html" }
    }
]

];


// Configuring shuffleSequence
var shuffleSequence = seq(
    "setcounter",
    "introduction",
    rshuffle(startsWith("main")),
    "practice-audio",
    "exitqs");



// Setting defaults
var defaults = [
    "MyController1", {
        q: "Is the sentence true or false?",
        as: ["True", "False"]
    }
];