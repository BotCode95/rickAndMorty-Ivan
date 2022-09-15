import api from "../../api/api";
import Footer from "../../components/Footer/Footer";
import Character from "../../components/List/Characters";
import List from "../../components/List/Characters";
import Navbar from "../../components/Navbar/Navbar";



const Home = ({ characters }) => {

    console.log(characters);

    return (
        <>
            <Navbar />
            <Character characters={characters} />
            <Footer />
        </>
    );
}

export default Home;