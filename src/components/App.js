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
          // image={require("../images/me.jpeg")}
        />
      </div>
      <div className="right column">
        <KeySummary 
          title="Key Summary"
          description="I am a very hard working junior marketing manager who is driven, passionate, and individual with a good work ethic. Driven individual who is open minded and self motivated."
        /> 
        {/* <WorkExperience 
          title="Work Experience"
          jobTitle1="Jnr Network Admin "
          company1="Z-Tech Group"
          duration1="June 2022 - Septemper 2022"
          description1="Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
          jobTitle2="Help Desk Support"
          company2="Rosebank College"
          duration2="January 2017 - February 2018"
          description2="Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
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
        twitter="https://www.twitter.com/print_whoami/"
        instagram="https://www.instagram.com/return.whoami/"
        github="https://github.com/mbhon1/"
      /> */}
  </main>
  );
}

export default App;
