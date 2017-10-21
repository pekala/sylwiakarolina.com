import React from 'react';
import PropTypes from 'prop-types';
import Section from '../layouts/Section';
import Paragraph from '../layouts/Paragraph';

export default ({ theme }) => (
    <Section theme={theme} spaced>
        <Paragraph centered>
            © {new Date().getFullYear()} - Sylvia Karolina Dluzniewska
        </Paragraph>
    </Section>
);
