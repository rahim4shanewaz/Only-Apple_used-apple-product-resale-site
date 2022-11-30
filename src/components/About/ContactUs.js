import React from 'react';
import ContactSEction from '../ContactSEction';
import useHooks from '../useTitles';

const ContactUs = () => {
    useHooks('Contact')
    return (
        <div>
            <ContactSEction></ContactSEction>
        </div>
    );
};

export default ContactUs;