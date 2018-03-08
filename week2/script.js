// 1
let num = [1,2,3,4,5,6,7,8,9,10];
let oddNum = num.filter((odd) => odd % 2 !== 0 );
console.log(oddNum);
let newNum = oddNum.map((doubleOdd) => doubleOdd*2);
console.log(newNum);

// 2 
let monday = [
    {
        name     : 'Write a summary HTML/CSS',
        duration : 180
    },
    {
        name     : 'Some web development',
        duration : 120
    },
    {
        name     : 'Fix homework for class10',
        duration : 20
    },
    {
        name     : 'Talk to a lot of people',
        duration : 200
    }
];

let tuesday = [
    {
        name     : 'Keep writing summary',
        duration : 240
    },
    {
        name     : 'Some more web development',
        duration : 180
    },
    {
        name     : 'Staring out the window',
        duration  : 10
    },
    {
        name     : 'Talk to a lot of people',
        duration : 200
    },
    {
        name     : 'Look at application assignments new students',
        duration : 40
    }
];

let tasks = monday.concat(tuesday);
console.log(tasks);

// 2.1
let twoDaysTasks = tasks.map((task) => task.name);
console.log(twoDaysTasks);

// 2.2
let durationHour = tasks.map((durations) => durations.duration = durations.duration/60  );
console.log(durationHour);

// 2.3
let tasksUnderTwoHours = tasks.filter((underTwoHours) => underTwoHours.duration < 2 );
console.log(tasksUnderTwoHours);

// 2.4 + 2.5
let bill = tasks.map((perTask) => perTask.duration*20);
console.log(bill);
let amount = 0
bill.forEach( i => {
    amount += i ; 
}); 
console.log("€" + amount);