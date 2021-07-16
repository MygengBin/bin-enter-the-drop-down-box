const {renderInputBoxStyleDefault} = require('./css/inputBox');
const {clearDomInnerHTML,renderDomInput} = require('./renderContent/inputRender');
const {renderList} = require('./renderContent/renderList');
const {renderListStyle} = require('./css/listStyle');
const {defineClassOrId} = require('./configuration/defineClassOrId');
window.binEnterTheDropDownBox = class{
    inputInitialStyleId='';
    resultProfile={};
    constructor({
        dom=null,
        showArrow=false,
        placeholder='请输入搜索框显示的内容',
        searchControlHeightInitial='1em',
        fontSize='1em',
        listItemOnClick = ({value='',inputId=''})=>{
            if(!inputId) return {code:0,message:'input id is null'};
            console.log(value);
        },
        listItemValueArray=[{text:'暂无数据',value:'暂无数据'}],
        reRenderArrayFunction=({searchValue=''})=>{
            console.log(searchValue);
            return[{text:'怎么没数据',value:0}];
        },
        reRenderArrayFunctionCatch=reason=> {
            console.log(reason);
        }
    }){
        if(!dom) return {code:0,message:'DOM is null!'};
        dom.style.overflow='hidden';
        const dateNow =`${ Date.parse(new Date())+parseInt(Math.random()*1000) }`;
        const resultProfile=  defineClassOrId({timestamp:String(dateNow),});
        this.resultProfile = resultProfile;
        clearDomInnerHTML(dom);
        this.inputInitialStyleId = renderInputBoxStyleDefault({timestamp:dateNow});
        renderList({
            inputId:resultProfile.SEARCH_INPUT_ID,
            dom,
            timestamp:dateNow,
            listItemOnClick,
            listItemValueArray,
            orderListId:resultProfile.UN_ORDER_LIST_ID,
            fontSize
        });
        
        renderDomInput({
            fontSize,
            showArrow,
            dom,
            placeholder,
            searchControlHeightInitial,
            timestamp:dateNow,
            listId:resultProfile.UN_ORDER_LIST_ID,
            inputId:resultProfile.SEARCH_INPUT_ID,
        });
        renderListStyle({
            timestamp:dateNow,
        });
        let flag = false;
        const inputDom = document.getElementById(resultProfile.SEARCH_INPUT_ID);
        inputDom.onfocus = () =>{
            document.getElementById(resultProfile.UN_ORDER_LIST_ID).style.display='block';
        }
        inputDom.onblur = () =>{
            setTimeout(() => {
                console.log('input text on blur::::');
                document.getElementById(resultProfile.UN_ORDER_LIST_ID).style.display='none';   
            },1000);
        }
        inputDom.oninput = () =>{
            console.log('trig on input');
            flag = true;
            console.log(`delay 500ms trigger re-render`);
            setTimeout(() => {
                if(!flag) return flag = false;
                flag = false;
                
                console.log(`run re-render`);
                reRenderArrayFunction({searchValue: inputDom.value.trim()}).then(value=>{
                    console.log(value);
                    renderList({
                        inputId:resultProfile.SEARCH_INPUT_ID,
                        dom,
                        timestamp:dateNow,
                        listItemOnClick,
                        listItemValueArray:value,
                        orderListId:resultProfile.UN_ORDER_LIST_ID,
                    });
                }).catch(reason=>{
                    reRenderArrayFunctionCatch(reason);
                });
                
            }, 500);
        }
    }
    
}