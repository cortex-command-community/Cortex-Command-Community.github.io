import React from 'react';
import Template from '../../Template/Template';
import Card from '../../Card/Card';
import Button from '../../Button/Button';

function Downloads() {
  return (
    <Template>
      <h1 style={{ marginTop: '48px' }}>Downloads</h1>
      <h2>Project Releases</h2>
      <Card title={'Cortex Command Community Project'}>
        <p style={{
          marginBottom: '18px',
        }}>This is where you can find the community's plans for Cortex Command's future. There'll be rebalancing, new weapons and units, and much more.</p>
        <Button link to='https://github.com/cortex-command-community/Cortex-Command-Community-Project-Data/releases'>Releases</Button>
      </Card>
      <h2>Modding Tools</h2>
      <Card title={'Legacy Mod Converter'}>
        <p style={{
          marginBottom: '18px',
        }}>This project automates most of the conversion work required to convert the legacy Cortex Command mods into Cortex Command Community Project compatible mods.</p>
        <Button link to='https://github.com/cortex-command-community/Cortex-Command-Legacy-Mod-Converter'>Get source</Button>
      </Card>
      <Card title={'Bender'}>
        <p style={{
          marginBottom: '18px',
        }}>The purpose of this tool is to make the life of modders easier by automagically generating bent limb sprites from limb parts.</p>
        <Button link to='https://github.com/cortex-command-community/Cortex-Command-Community-Bender/releases'>Releases</Button>
      </Card>
      <div style={{ height: '24px' }} />
    </Template >
  );
}

export default Downloads;
