import {apiHeatmap,apiTraiNavi} from "../../config";
import request from "../../server";
class NGRMap  {
  constructor() {
    this.appkey = "0fd2ce4e3da444b3bc1d2fea3bda5c25";
    this.zoom = 15.9;
    this.heatmapLayer = "";
    this.trailLayer = "";
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
                  this.map.addLayer(frame);
                  this.map.addLayer(area);
                  this.map.addLayer(collision);
                  this.map.render(); 
                  this._handleOnclik(area);
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
      request(apiHeatmap)
      .then((heatmap=>{
        if(this.heatmapLayer){
          this.map.removeFeatureLayer(this.heatmapLayer)
          this.heatmapLayer = "";
        }
        this.heatmapLayer = NGR.featureLayer(heatmap,{
          layerType:"Heatmap",
          styleConfig:this.style
        })

        this.map.addLayer(this.heatmapLayer);
        window.map = this.map;
        window.heatmapLayer = this.heatmapLayer;
      }))
      .catch(error=>{
        console.log(error)
      })
    })
  }
  addTrailLine(phone){
    this.map._core_map.whenReady(()=>{
         request(apiTraiNavi+"?phone="+phone)
            .then(res=>{
                const {navi} = res;
                const trail = {
                  Navi:navi
                }
                try {
                  if(this.trailLayer){
                    this.map.removeFeatureLayer(this.trailLayer)
                    this.trailLayer = ""
                  }
                  this.trailLayer = NGR.featureLayer(trail,{
                    layerType:"Navi",
                    styleConfig:this.style
                  })
                  this.map.addLayer(this.trailLayer)
                } catch (error) {
                  console.error("error",error)
                }
            })
            .catch(error=>{
                console.log(error)
            })
    })
  }
}
export default NGRMap;