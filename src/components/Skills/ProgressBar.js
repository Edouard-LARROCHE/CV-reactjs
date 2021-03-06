import React from 'react';

export default function ProgressBar(props) {
  return (
    <div className={props.className}>
      <h3> {props.title} </h3>
      <div className='years'>
        <span>Année d'experience</span>
        <span>6 mois</span>
        <span>1 an</span>
        <span>2 ans</span>
      </div>

      <div>
        {props.languages.map((item) => {
          let xpYears = 1;
          let progressBar = (item.xp / xpYears) * 100 + '%';

          return (
            <div key={item.id} className='languagesList'>
              <li> {item.value} </li>
              <div className='progressBar' style={{ width: progressBar }}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
