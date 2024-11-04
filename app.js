// var studentObj = {
//     qualifications : {
//             education: 'bachelors',
//             CGPA: 3.4,
//         },
//     stdName: 'adil',
//     stdAge: 17,
//     stdCity: 'karachi',
//     stdEmail: 'adil@gmail.com',
//     stdGender: 'male'
// };


// for (var key in studentObj) {
//     for (var keys in studentObj[key]) {
//         console.log(studentObj[key][keys]);
//     }
// }



// Array of Objects:

// var users = [
//     {
//         id: 1,
//         name: 'adil',
//         status: true,
//     },
//     {
//         id: 2,
//         name: 'hamza',
//         status: false,
//     },
//     {
//         id: 3,
//         name: 'ali',
//         status: true,
//     },
//     {
//         id: 4,
//         name: 'irtiza',
//         status: false,
//     },
// ];

// for (var i = 0 ; i < users.length ; i++) {
//     for (var keys in users[i]) {
//         console.log(keys,'=',users[i][keys]);
//     }
// }


// var students = [
//     {
//         id: 1,
//         name: 'henry',
//         class: 3,
//         section: "A",
//     },
//     {
//         id: 2,
//         name: 'chacha',
//         class: 6,
//         section: 'D',
//     },
//     {
//         id: 3,
//         name: 'ali',
//         class: 7,
//         section: 'B',
//     },
//     {
//         id: 4,
//         name: 'ahmed',
//         class: 10,
//         section: 'A',
//     },
//     {
//         id: 5,
//         name: 'hanzala',
//         class: 5,
//         section: "C",
//     },
//     {
//         id: 6,
//         name: 'zohaib',
//         class: 8,
//         section: 'D',
//     },
//     {
//         id: 7,
//         name: 'akram',
//         class: 9,
//         section: 'A',
//     },
//     {
//         id: 8,
//         name: 'tayyab',
//         class: 4,
//         section: 'B',
//     },
//     {
//         id: 9,
//         name: 'alpha',
//         class: 6,
//         section: "A",
//     },
//     {
//         id: 10,
//         name: 'chunkong',
//         class: 3,
//         section: 'C',
//     },
// ]

// for (var i = 0 ; i < students.length ; i++) {
//     for (var keys in students[i]) {
//         console.log(keys,'=',students[i][keys]);
//     }
// }



// Try & Catch:

// function greet() {
    
//     try{
//         console.log("hello world");
//     }
//     catch (err) {
//         console.log(err);
//     }

// }

// greet();



// Browser Controls:

// 1.)
// var whereWeAt = window.location.href;
// console.log(whereWeAt);
// window.location.href = "https://www.google.com";
// window.location.assign("https://www.google.com");
// window.location.replace("https://www.facebook.com");

// 2.)
// var theDomain = window.location.hostname;
// console.log(theDomain);

// 3.)
// var thePath = window.location.pathname;
// console.log(thePath);