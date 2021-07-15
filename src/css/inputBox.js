exports.renderInputBoxStyleDefault =  ({timestamp}) => {
    const headDom = document.getElementsByTagName('head')[0];
    const id = `binEnterTheDropDownBoxStyle_${timestamp}`;
    headDom.insertAdjacentHTML('afterbegin',`
    <style id="${id}">
        .input-search-division-${timestamp}{
            width:100%;
            position:relative;
            border:1px solid black;
            box-sizing: border-box;
        }
        .bin-enter-the-drop-down-box-${timestamp}{
            width:100%;
            padding:0;
            border: none;
            outline:0;
            display:flex;
        }
        .toggle-arrow-${timestamp}{
            position:absolute;
            right:2%;
            bottom:0;
        }
    </style>
    `);
    return {
        id,
    };
}