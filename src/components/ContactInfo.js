import React from "react";

const ContactInfo = (props) => {
    return (
        <div className="contactInfo--leftColumn">
            <div className="contactInfo--card">
                <div className="contactInfo--dislpay">
                    <img src={props.image} alt="Hloni"/>
                    <div className="text-block contactInfo--name">
                        <h2>{props.name}</h2>
                    </div>
                </div>
                <div className="contactInfo--container">
                    <div className="contactInfo--about">
                        <p><i className="fa fa-briefcase fa-fw"></i>{props.title}</p>
                        <p><i className="fa fa-home fa-fw"></i>{props.location}</p>
                        <p className="email"><i className="fa fa-envelope fa-fw"></i>{props.email}</p>
                        <p><i className="fa fa-phone fa-fw"></i>{props.phone}</p>
                        <hr />
                    </div>
                    
                    <div className="contactInfo--skillSet">
                        <h2 className="contactInfo--skills"><i className="fa fa-asterisk"></i>Skills</h2>
                        <p>Administration</p>
                        <div className="contactInfo--progress-bar">
                            <div className="skills admin">60%</div>
                        </div>
                        <p>Microsoft 365</p>
                        <div className="contactInfo--progress-bar">
                            <div className="skills ms">70%</div>
                        </div>
                        <p>Sales Representative</p>
                        <div className="contactInfo--progress-bar">
                            <div className="skills sales">50%</div>
                        </div>
                        <p>Business Management</p>
                        <div className="contactInfo--progress-bar">
                            <div className="skills bm">60%</div>
                        </div>
                        <p>Information Processing</p>
                        <div className="contactInfo--progress-bar">
                            <div className="skills ip">50%</div>
                        </div>
                        <p>Marketing Communication</p>
                        <div className="contactInfo--progress-bar">
                            <div className="skills mc">55%</div>
                        </div>
                        <p>Public Relations</p>
                        <div className="contactInfo--progress-bar">
                            <div className="skills pr">70%</div>
                        </div>
                    </div>
                
                    <div className="contactInfo--language">
                        <h2><i className="fa fa-globe"></i>Language</h2>
                        <p>English</p>
                        <div className="contactInfo--progress-bar">
                            <div className="skills english">70%</div>
                        </div>
                        <p>IsiZulu</p>
                        <div className="contactInfo--progress-bar">
                            <div className="skills zulu">70%</div>
                        </div>
                        <p>SeSotho</p>
                        <div className="contactInfo--progress-bar">
                            <div className="skills sotho">60%</div>
                        </div>
                        <p>IsiXhosa</p>
                        <div className="contactInfo--progress-bar">
                            <div className="skills xhosa">45%</div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default ContactInfo