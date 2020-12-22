import React, { Component } from "react";
import { FiCast , FiLayers , FiCodesandbox , FiMonitor } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiLayers />,
        title: 'Website Development',
        description: 'Having a website and online presence strategy allows you to market your buisness online'
    },
    
    {
        icon: <FiMonitor />,
        title: 'Mobile App Development',
        description: 'An App is a way to bring your consumer closer to your products or services'
    },
    {
        icon: <FiCast />,
        title: 'Digital Marketing',
        description: 'Mediocre marketers think in terms of campaigns. Great marketers think in terms of growth frameworks.'
    },
    
    {
        icon: <FiCodesandbox />,
        title: 'Full-Cycle Product Development',
        description: 'A complete solution provider for your business from conceptualization to visualizaton.'
    },
]

class ServiceTwo extends Component{
    render(){
        let title = 'Services',
        description = 'Our exclusive IT Solution Services. You define the problem we provide the best ever solution.';
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
                            <h2 className="title">{title}</h2>
                            <p>{description}</p>
                            <div className="service-btn">
                                <a className="btn-transparent rn-btn-dark" href="/digiService"><span className="text">Request Custom Service</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-12 mt_md--50">
                        <div className="row service-one-wrapper">
                            {ServiceList.map( (val , i) => (
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                                    <a href="/service-details">
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceTwo;
