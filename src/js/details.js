jQuery(function($){
    var details=document.querySelector('#details');
    var cookies=document.cookie;
    var carlist=[];
    if(cookies.length>0){
        cookies=cookies.split('; ');
        cookies.forEach(function(item){
            var temp=item.split('=');
            if(temp[0]=='carlist'){
                carlist=JSON.parse(temp[1]);
                carlist=carlist.slice(-1);
            }
        });
    }

    function render(){
        var dtu=document.createElement('div');
        dtu.className="dtu";
        dtu.innerHTML=carlist.map(function(item){
            return `
                    <div class="dt" data-guid="${item.id}">
                        <img src='${item.imgurl}'/>
                    </div>
                    <div class="dt_rt">
                        <p class="det">${item.title}</p>
                        <p class="gud_de">
                            123456789
                        </p>
                        <p class="pric"><span>可得价:</span>${item.price}<i>${item.save}</i></p>
                        <p class="de"><span>促销信息：</span>无</p>
                        <p class="gos">商品编号:<span>${item.id}</span>库存状况:<i>有货</i></p>
                        <p class="sx">属性选择:<span>右眼R</span></p>
                    </div>
            `;
        }).join('');
        details.innerHTML='';
        details.appendChild(dtu);

    }
    render();
});