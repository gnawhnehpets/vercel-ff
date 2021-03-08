import React, { useEffect, useState } from 'react';
import { ReactComponent as ChevronDownIcon } from '../images/icons/chevron-down.svg';
import { useOutsideAlerter } from '../hooks/outsideAlerter';
import { Transition } from '@headlessui/react';

type Props = {
    name?: string;
    options: Array<string>;
    value?: string;
    liftSelectedOption: (selectionOption: string, name?: string) => any;
};

function Dropdown({ name, options, liftSelectedOption, value }: Props) {
    const [selectedOption, setSelectedOption] = useState(
        value || options[0] || 'No Options'
    );
    const {
        visible: menuVisible,
        setVisible: setMenuVisible,
        ref,
    } = useOutsideAlerter(false);

    const handleMenuClick = () => setMenuVisible(!menuVisible);

    const handleOptionClick = (event: React.MouseEvent<HTMLElement>) => {
        let clickedOption = (event.target as HTMLElement).textContent;

        if (clickedOption && selectedOption !== clickedOption) {
            setSelectedOption(clickedOption);
        }

        setMenuVisible(false);
    };

    useEffect(() => {
        liftSelectedOption(selectedOption, name);
    }, [selectedOption]);

    return (
        <div>
            <div
                className="fg-item justify-items-center w-60 focus:ring-blue-700 focus:border-blue-700 flex flex-row-reverse items-center h-8 border"
                onClick={handleMenuClick}
                ref={ref}
            >
                <ChevronDownIcon className="justify-self-end w-6 h-6 mx-1 mt-1" />
                <p className="justify-self-stretch w-full px-2 text-center select-none">
                    {selectedOption}
                </p>
            </div>
            <Transition
                show={menuVisible}
                enter={'ease-out duration-100'}
                enterFrom="transform opacity-0 -transition-y-full"
                enterTo="transform opacity-100 transition-y-0"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 transition-y-0"
                leaveTo="transform opacity-0 -transition-y-full"
            >
                <ul className="fg-item w-60 first:rounded-md last:rounded-md absolute mt-2 text-center origin-bottom border shadow-md">
                    {options.map(option => (
                        <li
                            key={option}
                            onClick={handleOptionClick}
                            className="hover:bg-gray-50 hover:text-blue-700 block px-4 py-2 text-gray-700 select-none"
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            </Transition>
        </div>
    );
}

export default Dropdown;
