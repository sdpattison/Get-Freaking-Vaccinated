import Nav from '../components/Nav';
import MainContent from '../components/MainContent';
import Form from '../components/Form';
import Results from '../components/Results';
import { useContext } from 'react';
import MyContext from '../MyContext';


const Main = props =>{
    const {results, searched, haveResults} = useContext(MyContext);

    return(
        <div className="flex-container">
            <Nav />
            <MainContent />
            <Form />
            {searched  &&  results.length > 0 ?  <Results/> : "" }
            {searched  &&  results.length ===  0 ? <div className="mt-3"><p className="fw-bolder">Looks like there are no appointments in that area, check again later or check with your local hospitals and clinics!</p></div> :"" }
        </div>
    );
}

export default Main;