import React from 'react';
import avatarImage from '../../../assets/images/avatar.svg';
import Card from '../../common/Card/Card';
import Tag from '../../common/Tag/Tag';
import './Profile.css';


const Profile: React.FC = () => {
  return (
    <Card className="profile">
      <div className="profile-header">
        <div className="player-section">
          <h3>Player</h3>
          <div className="level-section">
            <p>Lvl 21</p>
            <div className="progress-bar">
              <div className="progress-indicator" style={{ width: '10%' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="profile-content">
        <div className="avatar-container">
          <img src={avatarImage} alt="Avatar" className="avatar" />
        </div>
        
        <div className="skills-container">
          <div className="skill-group">
            <h3>Hardskills:</h3>
            <div className="skill-tags">
              <Tag>html</Tag>
              <Tag>css</Tag>
              <Tag>javascript</Tag>
              <Tag>React</Tag>
              <Tag>React-Native</Tag>
              <Tag>Java</Tag>
              <Tag>Spring</Tag>
            </div>
          </div>
          
          <div className="skill-group">
            <h3>Softskills:</h3>
            <div className="skill-tags">
              <Tag>Communication</Tag>
              <Tag>Teamwork</Tag>
              <Tag>Time management</Tag>
              <Tag>Ingenious</Tag>
            </div>
          </div>
          
          <div className='skills-row'>
            <div className="skill-group">
              <h3>Class:</h3>
              <div className="skill-tags">
                <Tag>Back-end</Tag>
                <Tag>Front-end</Tag>
                <Tag>Support-TI</Tag>
              </div>
            </div>
            
            <div className="skill-group">
              <h3>Profession:</h3>
              <div className="skill-tags">
                <Tag variant="dark">Developer</Tag>
                <Tag variant="dark">Designer</Tag>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Profile;