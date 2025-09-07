
import reactHackerRankBadge from '../assets/svg/achievements/reactHackerRankBadge.jpg'
import reactHackerRankCertificate from '../assets/svg/achievements/reactHackerRankCertificate.jpg'
import reactUdemyCertificate from '../assets/svg/achievements/reactUdemyCertificate.jpg'
import nodeUdemyCertificate from '../assets/svg/achievements/nodeUdemyCertificate.jpg'

export const achievementData = {
    bio: "Won a college counter strike tournament showcasing teamwork, and freely trained 5 batches of students in financial markets with focus on technical analysis and trading psychology.",
    achievements: [
        {
            id: 1,
            title: 'HackerRank React Coding Challenge',
            details: 'Earned the react.js gold badge (5⭐ rating) on hackerrank by successfully solving coding challenges and passing test cases.',
            date: 'Jun 10, 2025',
            field: 'Coding',
            image: reactHackerRankBadge
        },
        {
            id: 2,
            title: 'Hackerank - React JS',
            details: 'React (Basic) It covers topics like Basic Routing, Rendering Elements,State Management (Internal Component State), Handling Events, ES6 and JavaScript and Form Validation',
            date: 'Jan 01, 2023',
            field: 'Skill',
            image: reactHackerRankCertificate
        },
        {
            id: 3,
            title: 'Udemy - React JS',
            details: 'A complete React course (incl. Redux, Hooks, Router, Next.js, TypeScript, Testing, and modern tools) taking you from basics to advanced real-world projects.',
            date: 'Apr 21, 2021',
            field: 'Certification',
            image: reactUdemyCertificate
        },
        {
            id: 4,
            title: 'Udemy - Node JS',
            details: 'Gained expertise in Node.js, Express, REST & GraphQL APIs, SQL/NoSQL databases, authentication, real-time apps, deployment, TypeScript, and Deno.',
            date: 'Jun 01, 2021',
            field: 'Certification',
            image: nodeUdemyCertificate
        }
    ]
}


// Do not remove any fields.
// Leave it blank instead as shown below.

/*

export const achievementData = {
    bio : "",
    achievements : []
}

*/