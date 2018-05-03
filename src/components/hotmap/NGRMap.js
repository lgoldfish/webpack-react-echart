class NGRMap  {
  constructor() {
    this.appkey = "0fd2ce4e3da444b3bc1d2fea3bda5c25";
    this.zoom = 15.9;
  }
  initMap() {
    this.map = new NGR.View('map', {
      AppKey: this.appkey,
      server: 'https://api.ipalmap.com',
      // dragging: false,
      touchZoom: false,
      // scrollWheelZoom: false,
      doubleClickZoom: false,
      boxZoom: false
    })
    this.map.setZoom(16);
    const res =new  NGR.DataSource({
      AppKey: this.appkey,
      server: 'https://api.ipalmap.com'
    })
    res
      .requestMaps()
      .then( (maps)=> {
        res
          .requestPOIChildren(maps.list[0].poi)
          .then((floors)=> {
            return res
              .requestPlanarGraph(floors[0].id)
              .then((layerInfo)=> {
                this._addLayer(layerInfo)
              });
          });
      })
      .fail(function (e) {
        return console.error(e, e.stack);
      });

      this.map._core_map.whenReady(()=>{
        this.map.setZoom(this.zoom);
      })

  }
  _addLayer(layerInfo){

    return NGR.IO.fetch({
              url: "./hotmap/style.json",  
              onsuccess: JSON.parse
          }).then((style)=> { 
            this.style = style;
                // NGR.IO.fetch({
                //   url:"./hotmap/trail.json",
                //   onsuccess:JSON.parse
                // })
                // .then(trail=>{
                  // console.log('trail is',trail)
                  this.map.clear();
                  const frame = NGR.featureLayer(layerInfo, { 
                    layerType: 'Frame',
                    styleConfig: style
                });
                  const area = NGR.featureLayer(layerInfo, { 
                      layerType: 'Area',
                      styleConfig: style
                  });
                  const collision = NGR.layerGroup.collision({
                    margin: 3
                });
                  // const trailLayer =  NGR.featureLayer(trail,{
                  //   layerType:"Navi",
                  //   styleConfig:style
                  // })
                  // console.log('tailLayer is',trailLayer)
                  this.map.addLayer(frame);
                  this.map.addLayer(area);
                  this.map.addLayer(collision);
                  // this.map.addLayer(trailLayer)
                  this.map.render(); 
                  this._handleOnclik(area);
                // })
          });
      
  }
  _handleOnclik(layers){
    layers.eachLayer((layer)=>{
      layer.on('click',(e)=>{
        console.log('click',e.target.feature)
      })
    })
  }
  addHeatMapLayer(){
    this.map._core_map.whenReady(()=>{
      NGR.IO.fetch({
        url:"./hotmap/heatmap.json",
        onsuccess:JSON.parse
      }).then(heatmap=>{
        const heatmapLayer = NGR.featureLayer(heatmap,{
          layerType:"Heatmap",
          styleConfig:this.style
        })
        this.map.addLayer(heatmapLayer);
      })
    })
  }
  addTrailLine(){
    this.map._core_map.whenReady(()=>{
      const routineLayer = NGR.layerGroup();
      routineLayer.addTo(this.map);
      NGR.IO.fetch({
        url:"./hotmap/trail.json",
        onsuccess:JSON.parse
      }).then(trail=>{
        console.log('trail',trail)
        const trailLayer = NGR.featureLayer(trail,{
          layerType:"Navi",
          styleConfig:this.style
        })
        routineLayer.addLayer(trailLayer)
      })
    })
  }
}
export default NGRMap;