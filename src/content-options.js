const introOptions = {
   fist:"Artist",
   second: "Developer",
   third: "Teacher"


}

const about  ={
    text: "Hi there! My name is Dennis Jackson and I am a self-taught programmer. I taught myself Python during the lockdown and then started learning JavaScript using Codecademy. I recently graduated from UC Davis' boot camp, where I gained a deeper understanding of web development and further honed my programming skills. I am excited to continue learning and growing as a programmer, and to apply my skills to solve challenging problems"
}

const skill = {
    skills:[
        { type:'JavaScript',level: 100},
        { type:'HTML',level: 100},
        { type:'CSS',level: 90},
        { type:'Python',level: 85},
        { type:'Sql',level: 85},
        { type:'React',level: 85},
        { type:'NoSql',level: 75},
      
      ],
    
      colors:{
        bar: '#ffcb0d',
        title: {
          text: {
            hue: 'blue',
            saturation: {
              minimum: 30,
              maximum: 70
            },
            level: 50
          },
          background: '#010114'
        }
      }
}


const projects = [
    {
        title: 'Only Cooks',
        img: 'https://lh3.googleusercontent.com/pw/AL9nZEWOSUWk6-IBLvgIj7VCUevIfxFC5YiwRPbnteKxRcw26dUUmEQy4BYh_c8qZxBcHSE7tUVe5D7GUBNucl99NNpcnRcgjN1mO_yUMyXJYHHTbx6ibXXlUDI6tJD-KO1PAehAcdXvjhgOBXGiIlQEo8ZFYg=w246-h160-no?authuser=1',
        technologies_used: 'HTML, CSS, JavaScript, React, Node, GraphQL, Apollo',
        github_link: 'https://github.com/zuetesei/cook-book',
        deployed_link: 'https://onlycooks.herokuapp.com/',
    },
    {
        title: 'Weather App',
        img: require('../src/image/weather.png'),
        technologies_used: 'HTML, CSS, JavaScript',
        github_link:'https://github.com/monkeyd87/weatherapp' ,
        deployed_link:'https://monkeyd87.github.io/weatherapp/',
    },
    {
        title: 'Quiz App',
        img:require('../src/image/social_media_api.png'),
        technologies_used: 'JavaScript,Html,CSS',
        github_link:'https://github.com/monkeyd87/quizmatic' ,
        deployed_link:'https://monkeyd87.github.io/quizmatic/',
    },
    {
        title: 'Employee Tracker',
        img:require('../src/image/employee_tracker.png'),
        technologies_used: 'JavaScript,SQL',
        github_link:'https://github.com/monkeyd87/Employee-Tracker' ,
        deployed_link:null,
    },
    {
        title: 'To do list',
        img:require('../src/image/calender.png'),
        technologies_used: 'JavaScript,HTML,CSS',
        github_link:'https://github.com/monkeyd87/calender/deployments/activity_log?environment=github-pages',
        deployed_link:'https://monkeyd87.github.io/calender/',
    },
    {
        title: 'pizzaHunt',
        img:require('../src/image/pizza.png'),
        technologies_used: 'JavaScript,MongoDB,Mongoose',
        github_link:null ,
        deployed_link:null,
    },
    {
        title: 'Social Media API',
        img:require('../src/image/social_media_api.png'),
        technologies_used: 'JavaScript,MongoDB',
        github_link:'https://github.com/monkeyd87/-Social_Network-_API' ,
        deployed_link:null,
    },
    {
        title: 'Aesthete',
        img:require('../src/image/aesthete.png'),
        technologies_used: 'JavaScript,MongoDB,HTML,CSS',
        github_link:'https://github.com/monkeyd87/aesthete' ,
        deployed_link:'https://murmuring-inlet-34782.herokuapp.com/',
    },
]



module.exports = {projects,skill,introOptions,about  }