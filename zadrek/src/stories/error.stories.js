import React from 'react';
import ErrorAlert from '../components/error';

export default {
  title: 'Components/ErrorAlert',
  component: ErrorAlert,
};

const Template = (args) => <ErrorAlert {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'Błąd!',
  open: true,
  handleClose: () => {},
};
