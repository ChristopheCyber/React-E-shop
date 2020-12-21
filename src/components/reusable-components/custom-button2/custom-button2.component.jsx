import React from 'react';
import './custom-button2.styles.scss';

const CustomButton2 = ({ children, classOn, ...restProps }) => {
    return (
        <button className={`
        ${classOn==="ON" ? "custom-button2-on" : "custom-button2-off"} 
        `}
            {...restProps}
            onClick={()=>{
                var tag = document.getElementsByClassName("snowfallClass")[0];
                 console.log("tag.style=",tag.style);
                 console.log("tag.id=",tag.id);
/*                 if (tag.style.display==="") {
                     tag.style.display="none";
                     console.log("1 tag.style.display=",tag.style.display);
                 } 
                 else {
                     tag.style.display="";
                     console.log("2 tag.style.display=",tag.style.display); 
                };
*/
                (tag.style.display==="") ? tag.style.display="none" : tag.style.display="";
            }}
        >
         <img  className="letItSnowPic"
                        src={require(`../../../assets/${children}.png`)} alt={`${children} clipart`} 
                    /> 
        </button>
    );
}

export default CustomButton2;
