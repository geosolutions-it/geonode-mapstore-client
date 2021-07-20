import React from 'react';
import {Tabs as TabsRB, Tab} from "react-bootstrap";
import PropTypes from 'prop-types';

const Tabs = ({itemsTab, transition}) => {

    const alltabs = itemsTab.map( (tabInfo, index) => {
        return (
            <Tab  key={index} eventKey={tabInfo?.title} title={tabInfo?.title}>
                {tabInfo?.data}
            </Tab>
        );
    });

    return (
        <TabsRB
            defaultActiveKey={itemsTab?.shift()?.title}
            transition={transition}
            className={"tabs-info"}
            id={"tabs-info"}
        >
            {alltabs}
        </TabsRB>

    );

};


Tabs.propTypes = {
    itemsTab: PropTypes.array,
    transition: PropTypes.bool
};

Tabs.defaultProps = {
    itemsTab: [],
    transition: true
};

export default Tabs;
