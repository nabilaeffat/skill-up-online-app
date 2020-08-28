

const fakeData =[
    {
        key : 1,
        name: 'IELTS Band 7+ Complete Prep Course',
        inf: 'Major Keys to Success',
        language: 'English',
        instructor: 'John William',
        image: 'https://img-a.udemycdn.com/course/240x135/684272_10c0_5.jpg',
        price: 13.99,
    },
    {
        key : 2,
        name: 'MongoDB - The Complete Developers Guide 2020',
        inf: 'Master MongoDB Development for Web & Mobile Apps. CRUD Operations, Indexes, Aggregation Framework - All about MongoDB',
        language: 'English',
        instructor: 'Angela Gibson',
        image: 'https://img-a.udemycdn.com/course/240x135/1906852_93c6.jpg',
        price: 16.99,
    },
    {
        key : 3,
        name: 'JavaScript - The Complete Guide 2020 (Beginner + Advanced)',
        inf: 'Modern JavaScript from the beginning - all the way up to JS expert level! THE must-have JavaScript resource in 2020.',
        language: 'English',
        instructor: 'Sarah Anderson',
        image: 'https://img-a.udemycdn.com/course/240x135/2508942_11d3.jpg',
        price: 18.99,
    },
    {
        key : 4,
        name: 'AWS Certified DevOps Engineer Professional 2020 - Hands On!',
        inf: 'START HERE: Learn Apache Kafka 2.0 Ecosystem, Core Concepts, Real World Java Producers/Consumers & Big Data Architecture',
        language: 'English',
        instructor: 'Stephen Mareek',
        image: 'https://img-a.udemycdn.com/course/240x135/2533568_2828_4.jpg',
        price: 23.99,
    },
    {
        key : 5,
        name: 'Data Structures&Algorithms-Asymptotic Notation, Recurrences',
        inf: 'Learning Asymptotic Behaviour, Solving Recurrences',
        language: 'English',
        instructor: 'Visha Sharma',
        image: 'https://img-a.udemycdn.com/course/240x135/3258400_9dba_3.jpg',
        price: 34.99,
    },
    {
        key : 6,
        name: 'Mastering Data Structure Using C',
        inf: 'Let us Master it',
        language: 'Spanish',
        instructor: 'Denveer Sarontino',
        image: 'https://img-a.udemycdn.com/course/240x135/3309004_9a8a_3.jpg',
        price: 99.99,
    },
    {
        key : 7,
        name: 'Algorithms and Data structures - Part 1',
        inf: 'Ace your next technical interview!',
        language: 'English',
        instructor: 'Nadia Anwar',
        image: 'https://img-a.udemycdn.com/course/240x135/895410_1240_2.jpg',
        price: 44.99,
    },
    {
        key : 8,
        name: 'SOC Analyst (Cybersecurity) Interview Questions and Answers',
        inf: 'Clear your next SOC interview with ease with these 300+ interview question asked during most SOC Analyst Interview',
        language: 'English',
        instructor: 'Shevin Poland',
        image: 'https://img-a.udemycdn.com/course/240x135/2924404_e637_4.jpg',
        price: 113.99,
    },
    {
        key : 9,
        name: 'Essential Coding Interview Questions + Coding Exercises!',
        inf: 'Learn 3 handy problem solving techniques. Get 11 hand-picked problems. Get ready for your next coding interview!',
        language: 'English',
        instructor: 'Nabila Effath',
        image: 'https://img-a.udemycdn.com/course/240x135/1278360_beb4_3.jpg',
        price: 99.99,
    },
    {
        key : 10,
        name: 'The Complete 2020 Web Development Bootcamp',
        inf: 'Become a full-stack web developer with just one course. HTML, CSS, Javascript, Node, React, MongoDB and more!',
        language: 'English',
        instructor: 'Dr Angela',
        image: 'https://img-a.udemycdn.com/course/240x135/1565838_e54e_11.jpg',
        price: 222.99,
    },
    {
        key : 11,
        name: 'Cisco CCNA 200-301 – The Complete Guide to Getting Certified',
        inf: 'The top rated CCNA course online and only one where all questions get a response. Full lab exercises included.',
        language: 'English',
        instructor: 'Rebecca Anwar',
        image: 'https://img-a.udemycdn.com/course/240x135/1203374_6d6f_3.jpg',
        price: 55.99,
    },
    {
        key : 12,
        name: 'Algorithms in Python : Live Coding & Design Techniques',
        inf: 'BackTracking,Divide & Conquer,Dynamic Programming,Greedy Algorithms via Data Structures for Interview & problem solving',
        language: 'English',
        instructor: 'Neil Peterson',
        image: 'https://img-a.udemycdn.com/course/240x135/3410342_b77f.jpg',
        price: 10.99,
    },
    

];


const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(fakeData);

export default fakeData;