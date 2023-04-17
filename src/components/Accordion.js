import React from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';
import { useState } from 'react';

const Accordion = ({ items }) => {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (nextIndex) => {
        setExpandedIndex((currentExpandedIndex) => {
            if (currentExpandedIndex === nextIndex) {
                return -1;
            }
            return nextIndex;
        });
    };

    const renderedItems = items.map((item, index) => {
        //from the map: if the index is equal to expandedIndex than return True.
        const isExpanded = index === expandedIndex;

        const icon = (
            <span className='text-4xl'>
                {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
            </span>
        );

        return (
            <div key={item.id}>
                {/* 1 for each object = totally separate functions. */}
                <div
                    className='flex justify-between p-3 bggray-50 border-b items-center cursor-pointer'
                    onClick={() => handleClick(index)}>
                    {item.label}
                    {icon}
                </div>
                <div>
                    {isExpanded && (
                        <div className='border-b p-5'>{item.content} </div>
                    )}
                </div>
            </div>
        );
    });
    return <div className='border-x border-t rounded'>{renderedItems}</div>;
};

export default Accordion;
