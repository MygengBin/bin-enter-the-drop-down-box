exports.renderListStyle = ({timestamp=''}) =>{
    if(!timestamp) return {code:0,message:'timestamp is null!'};
    const headDom = document.getElementsByTagName('head')[0];
    /* 
     border:1px solid black;
            border-top-width:0;
            border-bottom-width:0;
            border-bottom:1px solid black;
             */
    headDom.insertAdjacentHTML('afterbegin',`
    <style id="binEnterTheDropDownBoxListStyle_${timestamp}">
        .bin-enter-the-drop-down-box-order-list-${timestamp}{
            margin:0;
            padding:0;
            list-style:none;
            box-sizing:border-box;
           
            display: none;
        }
        .bin-enter-the-drop-down-box-order-list-item-${timestamp}{
            
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