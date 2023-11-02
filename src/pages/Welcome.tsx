import Clicker from '../components/Clicker/Clicker';

interface WelcomeProps {
    firstname: string;
    age: number;
}

// function Welcome({firstname, age}: {firstname: string, age: number}) {
function Welcome({ firstname, age }: WelcomeProps) {
    return (
        <>
            <h1>
                Welcome {firstname}, you are {age} yo.
            </h1>
            <Clicker />
        </>
    );
}

export default Welcome;
