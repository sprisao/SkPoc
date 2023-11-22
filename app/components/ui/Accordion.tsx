'use client'
import React, {useEffect, useRef, useState} from 'react';

const AccordionItem = ({title, children, isOpen, onClick}) => {
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
        setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }, [isOpen]);

    return (
        <div className={`overflow-hidden shadow ${isOpen ? 'mb-4' : ''} text-sm`}>
            <button
                onClick={onClick}
                className="p-4 w-full text-left transition duration-300 ease-in-out hover:bg-gray-100"
            >
                {title}
            </button>
            <div
                ref={contentRef}
                style={{height: `${contentHeight}px`}}
                className="transition-height duration-300 ease-in-out"
            >
                <div className="py-2 px-4">{children}</div>
            </div>
        </div>
    );
};
const Accordion = () => {
    const [openItem, setOpenItem] = useState(null);

    const accordionItems = [
        {
            title: '아이템 1',
            content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam dapibus, lorem arcu aliquet nunc, vitae aliquam nisl nunc quis nunc. Sed euismod, nisl sed aliquam dapibus, lorem arcu aliquet nunc, vitae aliquam nisl nunc quis nunc.',
        },
        {
            title: '아이템 2',
            content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam dapibus, lorem arcu aliquet nunc, vitae aliquam nisl nunc quis nunc. Sed euismod, nisl sed aliquam dapibus, lorem arcu aliquet nunc, vitae aliquam nisl nunc quis nunc.',
        },
        {
            title: '아이템 3',
            content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam dapibus, lorem arcu aliquet nunc, vitae aliquam nisl nunc quis nunc. Sed euismod, nisl sed aliquam dapibus, lorem arcu aliquet nunc, vitae aliquam nisl nunc quis nunc.',
        },
    ];


    const handleClick = index => {
        if (openItem === index) {
            setOpenItem(null);
        } else {
            setOpenItem(index);
        }
    };

    return (
        <div>
            {accordionItems.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    isOpen={openItem === index}
                    onClick={() => handleClick(index)}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
};

export default Accordion;