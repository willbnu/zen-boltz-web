import React from 'react';
    import Hero from './Hero';

    export default {
      title: 'Components/Hero',
      component: Hero,
    };

    const Template = (args) => <Hero {...args} />;

    export const Default = Template.bind({});
    Default.args = {
      // You can add props here to simulate different states
    };

    // Example of a responsive story (you'd need to adjust viewport in Storybook)
    export const Mobile = Template.bind({});
    Mobile.parameters = {
      viewport: {
        defaultViewport: 'iphone5', // Or any other mobile viewport
      },
    };
