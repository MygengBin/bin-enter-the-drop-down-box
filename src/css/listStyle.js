exports.renderListStyle = ({timestamp=''}) =>{
    if(!timestamp) return {code:0,message:'timestamp is null!'};
    const headDom = document.getElementsByTagName('head')[0];
    headDom.insertAdjacentHTML('afterbegin',`
    <style id="binEnterTheDropDownBoxListStyle_${timestamp}">
        .bin-enter-the-drop-down-box-order-list-${timestamp}{
            margin:0;
            padding:0;
            list-style:none;
            box-sizing:border-box;
            border:1px solid black;
            border-top-width:0;
            border-bottom-width:0;
            display: none;
        }
        .bin-enter-the-drop-down-box-order-list-item-${timestamp}{
            border-bottom:1px solid black;
            text-indent:.5em;
            min-height:10px;
        }
        .bin-enter-the-drop-down-box-order-list-item-${timestamp}:last-of-type{
            /* border-bottom:1px solid black; */
        }
    </style>
    `);
    return {
        id:`binEnterTheDropDownBoxListStyle_${timestamp}`,
    };
}