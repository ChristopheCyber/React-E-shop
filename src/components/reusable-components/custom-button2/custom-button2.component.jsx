import React from 'react';
import './custom-button2.styles.scss';

const CustomButton2 = ({ children, classOn, ...restProps }) => {
    return (
        <button className={`
            ${classOn === "ON" ? "custom-button2-on" : "custom-button2-off"} 
            `}
            {...restProps}
            onClick={() => {
                var tag = document.getElementsByClassName("snowfallClass")[0];
                // console.log("tag.id=", tag.id);

                // Keep this next /* line */ for preventing 'Expected an assignment or function call 
                // and instead saw an expression no-unused-expressions' error if using null... :
                /* eslint-disable no-unused-expressions */
                (tag.style.display === "")
                    ?
                    (tag.style.display = "none",
                        // null)
                        console.log("Snow OFF : display=\"", tag.style.display, "\" (saving GPU use)"))
                    :
                    (tag.style.display = "",
                        // null)
                        console.log("Snow ON : display=\"", tag.style.display, "\""))
            }}
        >
            <img className="letItSnowPic"
                src={require(`../../../assets/${children}.png`)} alt={`${children} clipart`}
            />
        </button>
    );
}

export default CustomButton2;
