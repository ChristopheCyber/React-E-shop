import React from 'react';
import './custom-button2.styles.scss';

const CustomButton2 = ({ children, classOn, ...restProps }) => {
    return (
        <button className={`
            ${classOn === "ON" ? "custom-button2-on" : "custom-button2-off"} 
            `}
            {...restProps}
            onClick={(e) => {
                /* eslint-disable no-unused-expressions */
                e.preventDefault;
                var element = document.getElementsByClassName("snowfallClass")[0];

                // console.log("element.id=", element.id);

                // Keep this next /* line */ for preventing 'Expected an assignment or function call 
                // and instead saw an expression no-unused-expressions' error if using null... :
                /* eslint-disable no-unused-expressions */
                (element.style.display === "")
                    ?
                    (element.style.display = "none",
                        // null)
                        console.log("Snow OFF : display=\"", element.style.display, "\" (saving GPU use)"))
                    :
                    (element.style.display = "",
                        // null)
                        console.log("Snow ON : display=\"", element.style.display, "\""))

                                
                // boucing effect:
                var elementToBounce = document.getElementsByClassName("letItSnowPic")[0];
                // -> removing the class
                elementToBounce.classList.add("bounce");
                // -> triggering reflow
                /* eslint-disable no-self-assign */
                elementToBounce.offsetWidth;
                // -> and re-adding the class
                // elementToBounce.classList.remove("bounce");
                setTimeout(function() {
                    elementToBounce.classList.remove('bounce');
                    }, 1200);
            }}
        >
            <img className="letItSnowPic"
                src={require(`../../../assets/${children}.png`)} alt={`${children} clipart`}
            />
        </button>
    );
}

export default CustomButton2;
