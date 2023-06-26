import React from 'react';
import Button from './ButtonC';

export default {
        component: Button,
        title: 'components/Button',
};

const Template = (args) => <Button {...args} />;


export const But2 = Template.bind({});

But2.args = { //quand on est pas connecté et traduit
        clicked: true,
        text: "Connect",
        clickChange: (event) => console.log(event.target.checked),
}


export const But4 = Template.bind({});

But4.args = { //quand on est connecté et non traduit
        text: "Disconnect",
        clicked: true,
        clickChange: (event) => console.log(event.target.checked),
}





