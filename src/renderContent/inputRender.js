exports.clearDomInnerHTML =  dom => {
    if(!dom) return {code:0,message:'DOM is null!'};
    return dom.innerHTML='';
}
exports.renderDomInput =  ({
    dom,
    timestamp,
    listId='',
    inputId='',
    showArrow=false,
    searchControlHeightInitial='1em',
    placeholder='请输入文本框显示的内容',
    fontSize='1em',
}) => {
    if(!dom) return {code:0,message:'DOM is null!'};
    if(!inputId) return {code:0,message:'inputId is null!'};
    dom.insertAdjacentHTML('afterbegin',`
    <div class="input-search-division-${timestamp}" style="height:${searchControlHeightInitial};font-size:${fontSize}">
        <input type="text" id="${inputId}" placeholder="${placeholder}" style="height:inherit;" class="bin-enter-the-drop-down-box-${timestamp}">
        ${showArrow?`<div class="toggle-arrow-${timestamp}" id="toggleArrow${timestamp}">&gt;</div>`:''}        
    </div>`);  
    if(showArrow){
        const toggleArrow = document.getElementById(`toggleArrow${timestamp}`);
        toggleArrow.onclick=()=>{
            const listIdDom = document.getElementById(listId);
            listIdDom.style.display = listIdDom.style.display==='none'?'block':'none';
        }
    }  
    
    return {
        inputId,
    };
}