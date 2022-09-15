
import Footer from "../../components/Footer/Footer";
import Characters from "../../components/List/Characters";
import Navbar from "../../components/Navbar/Navbar";



const Home = ({ characters }) => {

    return (
        <>
            <Navbar />
            <Characters characters={characters} />
            <Footer />
        </>
    );
}

export default Home;