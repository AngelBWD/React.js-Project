import React, {Fragment} from 'react';
import PropTypes from 'prop-types'
import './ProjectList.css';
import Project from './project';

const renderBuilds = (builds) => {
  return builds.map(build => {
    return (<Project {...build} />)
  })
}

const ProjectList = ({ builds }) => {
  return (
    <Fragment>
        <div className="container">
          {renderBuilds(builds)}
        </div>
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
