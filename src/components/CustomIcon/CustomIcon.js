import React from 'react'
const icons = {
    windTurbine: <g id="wind-turbine" data-name="wind-turbine"><path  d="M47.66,105.27l.56-4.46H63.57l.49,4.46Z"/><path d="M63.17,97.94H48.56c.18-1.7.35-3.34.53-5l2.49-21.9c.79-6.91,1.57-13.83,2.38-20.74a1.22,1.22,0,0,0-.58-1.27,4.07,4.07,0,1,1,5,0,1.36,1.36,0,0,0-.58,1.47q1.92,16.71,3.83,33.42.78,6.84,1.54,13.67A1.85,1.85,0,0,1,63.17,97.94Z"/><path d="M93.17,62.22a31.36,31.36,0,0,1-8.4-.39C75.65,60.17,67.58,56.07,59.94,51l-.41-.23A6.48,6.48,0,0,0,62,45.22C73.77,48.38,84.87,52.44,93.17,62.22Z"/><path d="M58.87,40.5a6.67,6.67,0,0,0-6,0C51,28.5,50.25,16.69,55.7,5.38l.36-.09c.7,1.75,1.52,3.45,2.09,5.24a49.11,49.11,0,0,1,2.12,16.65A82.19,82.19,0,0,1,58.87,40.5Z"/><path d="M18.21,60.66a30.13,30.13,0,0,1,8.19-7c7.14-4.36,15-6.83,23.12-8.46.06,0,.12,0,.27,0A6.39,6.39,0,0,0,52,50.68C41.48,56.76,30.75,61.73,18.21,60.66Z"/></g>
}
/**
 * SVG custom icons
 * The color and appearence can change or add animation
 * @param {string} name - the icon name. It's use to find the path in icons constant
 * @param {string} color - fill color
 * @param {string} classes
 */
const CustomIcon = ({name, color, classes}) => {
    return (
        <svg fill={color || '#fff'} className={classes}   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 110" >
            {icons[name]}
        </svg>
    )
}

export default CustomIcon