import React from 'react';
import Listatag from "../components/listatag";

export default {
  title: 'Components/Listatag',
  component: Listatag,
};

const Template = (args) => <Listatag {...args} />;

export const Default = Template.bind({});
Default.args = {
  tags: [
    { name: 'Tag1', count: 10 },
    { name: 'Tag2', count: 20 },
    { name: 'Tag3', count: 15 },
  ],
};
