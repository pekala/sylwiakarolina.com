import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './index.css';

const TemplateWrapper = ({ children }) => (
    <div>
        <Helmet
            title="Sylvia Karolina Dluzniewska"
            meta={[
                {
                    name: 'description',
                    content:
                        'Sylvia Karolina Dluzniewska - Copenhagen-based multidisciplinary graphic designer.',
                },
                {
                    name: 'keywords',
                    content:
                        'designer, ux designer, graphic designer, designer denmark',
                },
            ]}
        />
        {children()}
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func,
};

export default TemplateWrapper;
