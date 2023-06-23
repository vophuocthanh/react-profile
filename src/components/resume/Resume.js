import React, { useState } from 'react';
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);
  return (
    <section id='resume' className='w-full py-20 border-b-[1px] border-b-black'>
      <div className='flex items-center justify-center text-center'>
        <Title title='' des='My Resume' />
      </div>
      <div className=''>
        <ul className='grid items-center w-full grid-cols-1 gap-3 md:gap-16 md:grid-cols-2 xl:grid-cols-2 place-items-center'>
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              educationData
                ? 'border-designColor rounded-lg'
                : 'border-transparent'
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              skillData ? 'border-designColor rounded-lg' : 'border-transparent'
            } resumeLi`}
          >
            Skills
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
    </section>
  );
};

export default Resume;
