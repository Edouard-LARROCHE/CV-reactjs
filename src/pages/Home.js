import React from 'react';
import Navigation from '../components/Navigation';
import allIcons from 'simple-icons';
import { v4 } from 'uuid';
import { IconCloud } from 'react-icon-cloud';
import SocialNet from '../components/SocialNet';

export default function Home() {
  const tagCanvasOptions = {
    clickToFront: 500,
    depth: 1,
    imageScale: 2,
    initial: [0.1, -0.1],
    outlineColour: '#0000',
    reverse: true,
    tooltip: 'native',
    tooltipDelay: 0,
    wheelZoom: false,
  };
  const Icons = [
    'codesandbox',
    'typescript',
    'javascript',
    'dart',
    'java',
    'react',
    'flutter',
    'android',
    'html5',
    'css3',
    'nodedotjs',
    'express',
    'nextdotjs',
    'prisma',
    'amazonaws',
    'postgresql',
    'firebase',
    'nginx',
    'vercel',
    'testinglibrary',
    'jest',
    'cypress',
    'docker',
    'git',
    'jira',
    'github',
    'gitlab',
    'visualstudiocode',
    'androidstudio',
    'sonarqube',
    'figma',
    'angular',
    'python',
    'php',
    'django',
    'codewars',
  ];
  const iconTags = Icons.map((slug) => ({
    id: slug,
    simpleIcon: allIcons.Get(slug),
  }));
  return (
    <div className='home'>
      <Navigation />
      <div className='homeContent'>
        <div className='content'>
          <h2>Edouard-LARROCHE</h2>
          <h3>Développeur web Front-end junior</h3>
          <div className='sphere'>
            <IconCloud
              className='icons'
              key={v4()}
              id={'icon'}
              minContrastRatio={1}
              iconSize={45}
              backgroundHexColor={'#fff'}
              fallbackHexColor={'#000'}
              tags={iconTags}
              tagCanvasOptions={tagCanvasOptions}
            />
          </div>
        </div>
      </div>
      <div className='socialNet'>
        <SocialNet />
      </div>
    </div>
  );
}
