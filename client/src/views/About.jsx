import AboutContent from '../components/AboutContent';
import Nav from '../components/Nav';

const About = props =>{
    return(
        <div className="flex-container">
            <Nav />
            <AboutContent />
        </div>
    );
}
export default About;