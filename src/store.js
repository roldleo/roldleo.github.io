// store.js
import { createStore } from 'vuex'

export default createStore({
    state: {
        portfolioItems: [
            {
                id: 3,
                title: 'Andrana',
                subTitle: 'Web Application',
                image: require('./assets/andrana.png'),
                description: 'Freelance Project - September 2024',
                toolsUse: [9, 6, 5, 11, 12],
                image1: require('./assets/andrana-content.png'),
                fullDescription: `Andrana is a company that provides professional, 
            innovative, and effective legal, legality, taxation, and business 
            licensing consulting services. This application consists of several 
            services available at the company, KBLI 2020 data, and company biodata.`,
            },
            {
                id: 1,
                title: 'E-Logbook',
                subTitle: 'Android App - Web App',
                image: require('./assets/monitoringTA.png'),
                description: "Bachelor's Final Project - July 2024",
                toolsUse: [1, 2, 3, 4],
                image1: require('./assets/Wireframe-Elogbook.png'),
                fullDescription: `E-Logbook is an application used to assist 
        in completing final assignments at the Faculty of Engineering 
        & Information Technology, Universitas Jenderal Achmad Yani Yogyakarta. 
        This application has 3 types of users with different functions: <li>Students</li> Students 
        can submit final project concept, submitting a proposal seminar and a results seminar, 
        view schedules and create daily logbooks. <li>Lecturers</li> 
        Lecturers can see the list of students they supervise, give notes to students, 
        provide an assessment of each seminar held by them, and see the seminar schedule.
        <li>Admins</li> This project not only creates an android application, but also 
        creates a web application that helps admins in input data, update data, 
        validate all submissions from students and determine the seminar date and examiner lecturer.`,
            },
            {
                id: 2,
                title: 'iN-Touch',
                subTitle: 'Android App',
                image: require('./assets/inTouch.png'),
                description: 'Internship Project - September 2023',
                toolsUse: [1, 3],
                image1: require('./assets/Wireframe-inTouch1.png'),
                fullDescription: `iN-Touch is a dashboard application built to help the work process in the Cladtek bi-Metal Manufacturing company. Here are some of the functions of this application: 
        <li>Assist the Executive Leadership Team (ELT) in approving activities in the Company easily and digitally.</li>
        <li>Displays upcoming news, events and all company information such as policies and regulations.</li>
        <li>Forms that can be used by office staff such as gate passes and disposition letters.</li>
        iN-Touch is integrated with web applications using rest API, users can freely 
        choose to use web apps or mobile apps in carrying out their work in the company. 
        iN-Touch also uses SSO in the login system, it makes the application only accessible 
        with cladtek email.`,
            },
        ],
        tools: [
            {
                id: 12,
                title: 'Node Js',
                image: require('./assets/nodejs.png'),
            },
            {
                id: 11,
                title: 'Tailwind',
                image: require('./assets/tailwind-logo.png'),
            },
            {
                id: 10,
                title: 'HTML',
                image: require('./assets/html-logo.png'),
            },
            {
                id: 9,
                title: 'Vue Js',
                image: require('./assets/Vue.png'),
            },
            {
                id: 8,
                title: 'PHP',
                image: require('./assets/php.png'),
            },
            {
                id: 7,
                title: 'Dart',
                image: require('./assets/dart.png'),
            },
            {
                id: 6,
                title: 'Rest API',
                image: require('./assets/rest-api.png'),
            },
            {
                id: 5,
                title: 'SQL',
                image: require('./assets/sql.png'),
            },
            {
                id: 4,
                title: 'XAMPP',
                image: require('./assets/XAMPP-logo.png'),
            },
            {
                id: 3,
                title: 'Firebase',
                image: require('./assets/firebase-logo.png'),
            },
            {
                id: 2,
                title: 'CodeIgniter',
                image: require('./assets/ci-logo.png'),
            },
            {
                id: 1,
                title: 'Flutter',
                image: require('./assets/flutterlogo.png'),
            },
        ],
        educations: [
            {
                id: 1,
                name: 'Universitas Jenderal Achmad Yani Yogyakarta',
                jurusan: "Bachelor's degree in Information Technology",
                location: 'DI Yogyakarta, Indonesia',
                dateRange: 'September 2020 - August 2024',
                gpa: '3.56 / 4.00',
                image: require('./assets/XAMPP-logo.png'),
            },
        ],
        workExperiences: [
            {
                id: 1,
                name: 'Cladtek bi-Metal Manufacturing Batam',
                posisi: 'Mobile Developer Internship',
                dateRange: 'July 2023 - September 2023',
            },
            {
                id: 2,
                name: 'Freelance',
                posisi: 'App Developer / Editing',
                status: 'Freelance',
                dateRange: '2019 - present',
            },
        ],
        jobDesk: [
            {
                for: 1,
                detail: `Demonstrating the application to IT director, showcasing 
        achieved features such as gate pass, disposition letter and login system using company email.`,
            },
            {
                for: 1,
                detail: `developed a mobile application dashboard called iN-Touch using Flutter, 
          which provides features to display data, events, news, application forms 
          such as admission tickets, disposition letters, and more.`,
            },
            {
                for: 1,
                detail: 'Collaborate with cross-functional teams, create integrated dashboard applications, utilize rest API as data exchange, use Figma as an application design tool.',
            },

            {
                for: 2,
                detail: 'Editing videos, sound and images',
            },

            {
                for: 2,
                detail: 'Create website and mobile applications',
            },
        ],
    },
    getters: {
        getPortfolioItems: (state) => state.portfolioItems,
        getPortfolioItemById: (state) => (id) => state.portfolioItems.find((item) => item.id === parseInt(id)),
        getTools: (state) => state.tools,
        getToolsById: (state) => (id) => state.tools.find((item) => item.id === parseInt(id)),
        getEducations: (state) => state.educations,
        getEducationsById: (state) => (id) => state.educations.find((item) => item.id === parseInt(id)),
        getWorkExperiences: (state) => state.workExperiences,
        getJobDesks: (state) => state.workExperiences,
        getJobDesksByWorkId: (state) => (id) => state.jobDesk.filter((job) => job.for === id),
    },
})
