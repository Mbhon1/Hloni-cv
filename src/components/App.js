import './App.css';
import ContactInfo from './ContactInfo';
// import WorkExperience from './WorkExperience';
import Education from './Education';
// import Footer from './Footer';
import KeySummary from './KeySummary';

function App() {
  return (
    <main>
    <div className="row">
      <div className="left column">
        <ContactInfo 
          name="Lehlohonolo Sibeko"
          title="Jnr Marketing Manager"
          location="Soweto, RSA"
          email="HloniLehlohonolo072@gmail.com"
          phone="(+27) 68-037-9843"
          image={require("../images/hloni.jpeg")}
        />
      </div>
      <div className="right column">
        <KeySummary 
          title="Key Summary"
          description="I am a very hard working junior marketing manager who is driven, passionate, and individual with a good work ethic. Driven individual who is open minded and self motivated."
        /> 
        {/* <WorkExperience 
          title=""
          jobTitle1=""
          company1=""
          duration1=""
          description1=""
          jobTitle2=""
          company2=""
          duration2=""
          description2=""
        /> */}
        <div className="pad-top">
          <Education 
            title="Education"
            school="SWGC Dobsonville"
            date="2021 - 2022"
            certificate="Diploma"
            course="Marketing Management"
            hsTitle="Orlando West High"
            hsDate="2017 - 2019"
            hsCertificate="Bachelors"
          />
        </div>
      </div>
    </div>
    {/* <Footer 
        twitter=""
        instagram=""
        github=""
      /> */}
  </main>
  );
}

export default App;
