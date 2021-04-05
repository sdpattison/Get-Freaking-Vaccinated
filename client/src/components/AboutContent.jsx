const AboutContent = props =>{
    return(
        <div className="flex-container mt-3 p-2">
            <div className="d-flex justify-content-center">
                <h4>Hello!</h4>
            </div>
            <div className="d-flex justify-content-center">
                <p>
                    This app was built out of frustration with websites that have the same UI as a library in the 90s and my inability to get an appointment for a vaccine in my state. Hopefully it will help you find an appointment if you don't already have one! Stay safe, we are almost through this!
                </p>
            </div>
            <div className="d-flex justify-content-center">
                <p>
                    Also a big thank you to <a href="http://vaccinespotter.org">Vaccine Spotter</a> for taking the initiative and creating the API we use!
                </p>
            </div>
            <div className="d-flex justify-content-center">
                <p>
                    PS - I can absolutely be bought. If you or your company are hiring Software Engineers/Developers send me an email - samueldpattison@gmail.com.
                </p>
            </div>
        </div>
    );
}
export default AboutContent;