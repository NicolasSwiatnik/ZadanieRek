import React from 'react';
import Wylapanie from '../components/wylapanie';

export default {
  title: 'Components/Wylapanie',
  component: Wylapanie,
};

const Template = (args) => <Wylapanie {...args} />;

export const Default = Template.bind({});
Default.args = {};