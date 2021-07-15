exports.clearOuterHTMLList = () =>{

}
const listItemValueArrayInitial=[{text:'暂无数据',value:'暂无数据'}];
function renderListItem({
    timestamp='',
    onclickFunction = ({value='',inputId=''}) =>{
        console.log(value);
        console.log(inputId);
    },
    orderListDom=null,
    listText='暂无数据',
    listValue=0,
    inputId=0,
}){
    if(!timestamp) return {code:0,message:'timestamp is null!'};
    if(!orderListDom) return {code:0,message:'order list dom is null!'};    
    const li = document.createElement('li');
    li.className=`bin-enter-the-drop-down-box-order-list-item-${timestamp}`;
    li.onclick = () => {
        onclickFunction({value:listValue,inputId,});
        orderListDom.innerHTML='';
        orderListDom.append(renderListItem({
            timestamp,
            orderListDom,
            inputId,
        }));
        orderListDom.style.display='none';
    }
    li.innerText = listText;
    return li;
}
exports.renderList = ({
    dom=null,
    timestamp='',
    listItemValueArray=listItemValueArrayInitial,
    fontSize='1em',
    listItemOnClick=({value='',inputId=''})=>{
        console.log(value);
        console.log(inputId);
    },
    orderListId='',
    inputId='',
}) => {
    if(!timestamp) return {code:0,message:'timestamp is null'};
    if(!orderListId || !String(orderListId)) return {code:0,message:'orderListId is null! '};
    if(!document.getElementById(orderListId)){
        dom.insertAdjacentHTML('beforeend',`<ul class="bin-enter-the-drop-down-box-order-list-${timestamp}" style="font-size:${fontSize}" id="${orderListId}"></ul>`);
    }
    

    const orderListDom = document.getElementById(orderListId);
    orderListDom.innerHTML=``;
    listItemValueArray.forEach(item=>{
        orderListDom.append(renderListItem({
            timestamp,
            onclickFunction :listItemOnClick,
            orderListDom,
            listText:item.text,
            listValue:item.value,
            inputId,
        }));
    });
    return {
        id:orderListId,
    }
}