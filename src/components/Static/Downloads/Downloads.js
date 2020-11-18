import React from 'react';
import Template from '../../Template/Template';
import Card from '../../Card/Card';
import Button from '../../Button/Button';


import EmojiGood from '../../Emoji/good.png';

function Downloads() {
  return (
    <Template>
      <h1 style={{ marginTop: '48px' }}>Downloads</h1>
      <h2>Project Releases</h2>
      <Card title={'Cortex Command Community Project'}>
        <p style={{
          marginTop: '8px', marginBottom: '18px',
        }}>This is where you can find the community's plans for Cortex Command's future. There'll be rebalancing, new weapons, units, and much <i>much</i> more.</p>
      
        <Button link to='https://github.com/cortex-command-community/Cortex-Command-Community-Project-Data/releases'>Releases</Button>
      
        <Button link to='https://github.com/cortex-command-community/Cortex-Command-Community-Project-Data/releases/download/v0.1.0-pre2/CCCP.v0.1.0-pre2.zip'>Pre 2 <img width='14px' height='14px' marginBottom='-12px' src={EmojiGood}/> (latest)</Button>
      
      </Card>
      <h2>Mods</h2>
      <Card title={'Get Mods'}>
        <p style={{
          marginTop: '8px', marginBottom: '18px',
        }}>What is Cortex Command without <strong>MODS</strong>? Luckily, we've got you covered. There are 2 great ways to get mods and if neither of them suit your fancy, you can use the Legacy Mod Converter to convert mods from the Data Realms Fan Forums or the Steam Workshop!</p>
      
        <Button link to='https://discord.gg/yuZvazK'>Discord</Button>
      
        <Button link to='https://cccp.mod.io/'>Mod.io (Coming Soon)</Button>    
      
      </Card>
      <h2>Modding Tools</h2>
      <Card title={'Legacy Mod Converter'}>
        <p style={{
          marginTop: '8px', marginBottom: '18px',
        }}>This project automates most of the conversion work required to convert the legacy Cortex Command mods into Cortex Command Community Project compatible mods.</p>
        <Button link to='https://github.com/cortex-command-community/Cortex-Command-Legacy-Mod-Converter'>Get source</Button>
      </Card>
      <Card title={'Bender'}>
        <p style={{
          marginTop: '8px', marginBottom: '18px',
        }}>The purpose of this tool is to make the life of modders easier by automagically generating bent limb sprites from limb parts.</p>
        <Button link to='https://github.com/cortex-command-community/Cortex-Command-Community-Bender/releases'>Releases</Button>
      </Card>
      <div style={{ height: '24px' }} />
    </Template >
  );
}

export default Downloads;
