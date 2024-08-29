import foodImg from './assets/food.avif';

export default function Home() {
    return (
       <>
         <h1>Home View</h1>

        <img src={foodImg} />

        <img src={require('./assets/food.avif')} />
       </>
    );
}