import React, { useState } from 'react';

const FoodtruckTabs = ({ allTabs, selectedTab, setSelectedTab }) => {

    const onClickHandler = (idx) => {
        setSelectedTab(idx);
    }

    return(
        <div className="navbar">
            <div className="tab">
                {
                    allTabs.map((obj, idx) => {
                        return <p key={idx} onClick={ e => {onClickHandler(idx)}}>
                            {obj.tab}
                        </p>
                    })
                }
            </div>
            <div className="content">
                <>{allTabs[selectedTab].content}</>
            </div>
        </div>
    )
}

export default FoodtruckTabs;