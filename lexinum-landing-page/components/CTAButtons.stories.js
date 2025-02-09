import React from 'react';
    import CTAButtons from './CTAButtons';

    export default {
      title: 'Components/CTAButtons',
      component: CTAButtons,
    };

    const Template = (args) => <CTAButtons {...args} />;

    export const Default = Template.bind({});
    Default.args = {};

    export const Hovered = Template.bind({}); // Simulate hover with CSS
    Hovered.args = {};
    Hovered.parameters = {
        pseudo: {
            hover: true, // Simulate hover state
        }
    }
