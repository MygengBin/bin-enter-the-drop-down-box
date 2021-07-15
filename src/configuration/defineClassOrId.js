exports.defineClassOrId = ({timestamp=''}) =>{
    if(!String(timestamp)) return {code:0,message:'The error is that the timestamp is empty '}
    return {
        code:1,
        SEARCH_INPUT_ID: `binEnterTheDropDownBox_${timestamp}`,
        SEARCH_INPUT_CLASS: `bin-enter-the-drop-down-box-_${timestamp}`,
        SEARCH_INPUT_STYLE_ID: `binEnterTheDropDownBox_${timestamp}`,
        UN_ORDER_LIST_CLASS: `bin-enter-the-drop-down-box-order-list-${timestamp}`,
        UN_ORDER_LIST_ID: `binEnterTheDropDownBoxOrderList_${timestamp}`,
        UN_ORDER_LIST_STYLE: `binEnterTheDropDownBoxListStyle_${timestamp}`,
        UN_ORDER_LIST_ITEM_CLASS: `bin-enter-the-drop-down-box-order-list-item-${timestamp}`,
    }
}