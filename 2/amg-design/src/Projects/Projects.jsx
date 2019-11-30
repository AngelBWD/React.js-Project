import React, {Fragment} from 'react';
import PropTypes from 'prop-types'
import './Projects.css';
import Project from './project';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
//import ProjectList from '../Projects/Projects';
import Main from '../App/Main/Main';


const renderBuilds = (builds) => {
  return builds.map(build => {
    return (<Project {...build} />)
  })
}

const ProjectList = ({ builds }) => {
  return (
    <Fragment>
      <Navigation />
        <Main title = "Hello!"/>
        <div>
          <div className="container">
            {renderBuilds(builds)}
          </div>
        </div>
      <Footer />
    </Fragment>
   
  )
}

ProjectList.defaultpRrops = {
  builds: []
}

ProjectList.propTypes = {
  builds: PropTypes.array.isRequired
}

  
export default ProjectList;
