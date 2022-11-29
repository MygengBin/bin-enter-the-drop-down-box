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
            display: none;
            position: absolute;
            width: 100%;
            border-left: 1px solid #CECECE;
            border-right: 1px solid #CECECE;
        }
        .bin-enter-the-drop-down-box-order-list-item-${timestamp}{
            text-indent:.5em;
            min-height:10px;
            width: 100%;
            cursor: pointer;
            border-bottom: 1px solid #CECECE;
            padding:5px 0;
            background-color: white;
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