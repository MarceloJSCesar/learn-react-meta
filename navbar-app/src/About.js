import ReactPlayer from 'react-player';


export default function About() {
    return (
       <>
         <h1>About View</h1>

         <YoutubeVideo />
       </>
    );
}

const YoutubeVideo = () => {
    return (
        <ReactPlayer url="https://www.youtube.com/watch?v=LIOsciiO8Ag" />
    );
};