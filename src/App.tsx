import './App.css';
import Timer from './components/Timer/Timer';
import Welcome from './pages/Welcome';

function App() {
    return (
        <>
            <Welcome firstname="Sylvain" age={33} />
            <Timer />
        </>
    );
}

export default App;


// export const App = () => {

//   return (
//     <>
//       <Welcome firstname="Sylvain" age={28}/>
//     </>
//   )
// }


// const [enabled, setEnabled] = useState<boolean>(false);


// type Status = "idle" | "loading" | "success" | "error";
// const [status, setStatus] = useState<Status>("idle");
