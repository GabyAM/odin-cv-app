import { Form } from "./components/Form";
import { Curriculum } from "./components/Curriculum";

function App() {
	const [generalInfo, setGeneralInfo] = useState({
		name: "Your name",
		email: "heregoesyouremail@gmail.com",
		phone: "1234-12345",
	});
	function updateGeneralInfo(e) {
		const { name, value } = e.target;
		console.log("update");
		setGeneralInfo({ ...generalInfo, [name]: value });
	}
	return (
		<>
			<Form
				onGeneralInfoUpdate={updateGeneralInfo}
			></Form>
			<Curriculum
			></Curriculum>
		</>
	);
}

export default App;
