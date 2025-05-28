import React from 'react';

const ModalWin = ({children, visible, setVisible}) => {
    const rootClasses = ["fixed top-0 left-0 bottom-0 right-0 z-50 "];

    if (visible) {
        rootClasses.push('flex justify-center items-center bg-black/50');
    } else {
        rootClasses.push('hidden');
    }

    return (
        <>
        <div className={rootClasses.join(' ') } onClick={() => setVisible(false)}>
            <div className="p-5 bg-white border border-gray-300 rounded-md min-w-[500px]" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
        </>
    );
}

export default ModalWin;
