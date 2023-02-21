import Typewriter from 'typewriter-effect';



export default function HtmlBuilder(){
   return(  <Typewriter
    options={{
        strings: [
            'Father',
            'Teacher',
            'Developer',
            'Student'
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
        pauseFor:2000
    }}
/>)
}