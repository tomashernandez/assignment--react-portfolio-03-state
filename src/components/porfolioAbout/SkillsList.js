import React, {Component} from 'react'
import Skills from './Skill'

class SkillsList extends Component {
  render() {
    return (
      /* receive `skills` array as props from App compnonent */
      <section>
        <h4>Skills</h4>
        <div className="skills-list">

          { /*
              map over skills array and return an array of <Job/> components
              NOTE: you must pass the string value to the <Skills> component as props...
            */
           this.props.skills.map(element => {
            
            return <Skills key={element} skill={element} />
          })
          }
        </div>
      </section>
    )
  }
}

export default SkillsList;
