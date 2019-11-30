import React, {Component} from 'react';
import './styles.css';


class Project extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const {image, name, type, location,architect} = this.props
    return (
      <div className="build-card">
        <img className="build-image" src={image} alt={name} />
          <div>
            <span className="build-name">{name}</span>
            <span className="build-type">( {type} ) - {location}</span>
              <p className="build-architect">
                <span>
                  Architect: 
                    <span>
                      {architect}
                    </span>
                </span>
              </p>
          </div>
       </div>
    )
  }
}



export default Project;