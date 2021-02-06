import React from 'react';
import Template from '../../Template/Template';
import Card from '../../Card/Card';
import Button from '../../Button/Button';

import EmojiGood from '../../Emoji/good.png';

function Get_Involved() {
  return (
    <Template>
      <h1 style={{ marginTop: '48px' }}>Get Involved</h1>
      <h2>Want to help the Community Project? Here are some links to help you get started.</h2>
           
      <Card title={'Join the Discord'}>
        <p style={{
          marginTop: '8px', marginBottom: '18px',
        }}>So you want to take part in the project? A good start would be going to the discord where the project is discussed. You can find a link here. After that, all our releases will be available under the releases area and all of our bugs and changes and ideas are tracked in github issues. Feel free to play and suggest changes or point out any problems.</p>
      
        <Button link to='https://discord.gg/yuZvazK'>Discord <img width='14px' height='14px' marginBottom='-12px' src={EmojiGood}/></Button>
           
      </Card>

      <Card title={'Contribute to the Github'}>
        <p style={{
          marginTop: '8px', marginBottom: '18px',
        }}>If you've got experience with the game's ini data through modding it, are good at spriting or know Lua, maybe you can contribute some of your time directly to the project. We'll look at any pull requests that come in and are always happy to have more hands on deck. If you're an experienced programmer (particularly with C++), there's also tons of work to be done in our source repository.</p>
        <p style={{
          marginTop: '8px', marginBottom: '18px',
        }}>If you're familiar with github you should be familiar with making issues. It's as simple as going to the issues tab and clicking a button. Once you do that, you'll see an easy to follow template to fill in. After you've done that, try to put in the appropriate category for the issue and it'll be handled from there.</p>
        <Button link to='https://github.com/cortex-command-community/Cortex-Command-Community-Project-Source/'>Get Started</Button>
      
        <Button link to='https://github.com/cortex-command-community/Cortex-Command-Community-Project-Source/issues'>View or Submit an Issue</Button>    
      
      </Card>

    </Template>
  );
}

export default Get_Involved;
