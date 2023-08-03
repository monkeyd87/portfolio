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
        title:"harvest haeven",
        img:require('../src/image/harvasetHaeven1.png'),
        technologies_used: 'HTML, CSS, JavaScript, React, Node, MongoDB',
        github_link: 'https://github.com/zuetesei/cook-book',
        deployed_link: 'https://onlycooks.herokuapp.com/',

    },
    {
        title: 'Aesthete',
        img:require('../src/image/aesthete.png'),
        technologies_used: 'JavaScript,MongoDB,HTML,CSS',
        github_link:'https://github.com/monkeyd87/aesthete' ,
        deployed_link:'https://murmuring-inlet-34782.herokuapp.com/',
    },
    {
        title:"Driddit",
        img:require('../src/image/driddit.png'),
        technologies_used: 'HTML, CSS, JavaScript, React, Node',
        github_link: 'https://github.com/monkeyd87/driddit',
        deployed_link: 'monkeyd87.github.io/driddit',
    },
    {
        title: 'yugiodeckbuilder',
        img:require('../src/image/yugiodeckbuilder.png'),
        technologies_used:"Javascript, React, Bootstrap,",
        github_link:'https://github.com/monkeyd87/yugiodeckbuilder',
        deployed_link: "https://monkeyd87.github.io/yugiodeckbuilder"
    },
    {
        title: 'Weather App',
        img: require('../src/image/weather.png'),
        technologies_used: 'HTML, CSS, JavaScript',
        github_link:'https://github.com/monkeyd87/weatherapp' ,
        deployed_link:'https://monkeyd87.github.io/weatherapp/',
    },
   
]



module.exports = {projects,skill,introOptions,about  }