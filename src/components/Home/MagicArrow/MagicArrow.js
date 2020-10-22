import React from 'react';

function MagicArrow(props) {
    const onClick = () => {
        const sections = [
            { scrollTo: 'full-pager', viewCheck: 'full-pager', block: 'center' },
            { scrollTo: 'scroll-anchor', viewCheck: 'cortex-card-container', block: 'start' },
        ];

        for (const section of sections) {
            const viewCheck = document.getElementsByClassName(section.viewCheck)[0];
            console.log(viewCheck.getBoundingClientRect(), window.innerHeight)
            if (
                viewCheck.getBoundingClientRect().bottom > window.innerHeight + 1 &&
                // Ignore centered content on small screen sizes
                !(
                    viewCheck.getBoundingClientRect().bottom > window.innerHeight &&
                    viewCheck.getBoundingClientRect().top < 0
                )
            ) {
                const scrollTo = document.getElementsByClassName(section.scrollTo)[0];
                scrollTo.scrollIntoView({ block: section.block, behavior: 'smooth' });
                break;
            }
        }
    };

    return (
        <div style={{
            position: 'fixed',
            bottom: '20px',
            width: '100%',
            zIndex: '100',
        }}>
            <button onClick={onClick} style={{
                border: '0',
                padding: '0',
                backgroundColor: 'transparent',
                margin: 'auto',
                display: 'block',
                cursor: 'pointer'
            }}>
                <img src="./arrow.gif" alt="Scroll to content" />
            </button>
        </div>
    );
}

export default MagicArrow;
