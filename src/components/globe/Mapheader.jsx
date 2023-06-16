import * as React from "react";
import { useState, useMemo, useCallback } from "react";

import Map, { Source, Layer, NavigationControl } from "react-map-gl";
import bbox from '@turf/bbox';
import * as turf from '@turf/turf'

import "mapbox-gl/dist/mapbox-gl.css";
import sourcePlates from "../../sources_plates.json";
import {
  layerPlatesLines,
  layerPlatesBg,
  layerPlatesBgHover,
  clusterCountLayer,
  clusterLayer,
  unclusteredPointLayer,
} from "./mapstyles";
import { sourceSeismes } from "./helpers";
import MapControls from "./MapControls";

export const Mapheader = ({ seismes }) => {
  const [hoverInfo, setHoverInfo] = useState(null);
  const [cursor, setCursor] = useState("auto");
  const [seismesGEOJSON, setSeismesGEOJSON] = useState(sourceSeismes(seismes))
  const mapRef = React.useRef();
  React.useEffect(() => {
    if (mapRef.current) onLoad()
  }, [seismes])


  const onLoad = () => {
    console.log('onLoad')
    if (seismes.length > 1) {
      setSeismesGEOJSON(sourceSeismes(seismes))
      let newCoord = []
      for (const feature of sourceSeismes(seismes).features) {
        newCoord.push(feature.geometry.coordinates)
      }

      const [minLng, minLat, maxLng, maxLat] = bbox(turf.lineString(newCoord));
      console.log(mapRef)
      mapRef.current.getMap().fitBounds(
        [
          [minLng, minLat],
          [maxLng, maxLat]
        ],
        { padding: 100, duration: 1000 }
      );
    }
    if(seismes.length === 1){
      let lat = seismes[0].lat
      let lng = seismes[0].lon
      mapRef.current.getMap().setCenter([lng, lat])
      mapRef.current.getMap().setZoom(5)
    }
  }


  const selectedPlateName = (hoverInfo && hoverInfo.properties.PlateName) || "";
  const filter = useMemo(
    () => ["in", "PlateName", selectedPlateName],
    [selectedPlateName]
  );

  const onHover = useCallback((event) => {
    const feature = event.features && event.features[0];
    if (!feature) return;
    setHoverInfo({
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat,
      type: feature.layer.id === "unclustered-point" ? "point" : "plate",
      properties: feature && feature.properties,
    });
  }, []);
  const onMouseEnter = useCallback(() => setCursor("pointer"), []);
  const onMouseLeave = useCallback(() => setCursor("auto"), []);


  return (
    <section>
      <Map
        ref={mapRef}
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 1,
          renderWorldCopies: false,
        }}
        style={{ width: "100%", height: "80vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxAccessToken={
          "pk.eyJ1IjoiamVvZnVuIiwiYSI6ImNrd3huZXZjMzAwMWkycXFtb29zeDMxdnMifQ.N0SyKbZ6Br7bCL0IPmUZIg"
        }
        interactiveLayerIds={["plaques-bg", "unclustered-point"]}
        cursor={cursor}
        projection="globe"
        onClick={false}
        onLoad={onLoad}
        // onSourceData={onLoad}
        scrollZoom={false}
        onMouseMove={onHover}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <NavigationControl />

        <Source id="source-plates" type="geojson" data={sourcePlates}>
          <Layer {...layerPlatesBg} />
          <Layer {...layerPlatesBgHover} filter={filter} />
          <Layer {...layerPlatesLines} />
        </Source>
        <Source
          id="source-seismes"
          type="geojson"
          data={sourceSeismes(seismes)}
          cluster={false}
          clusterMaxZoom={14}
          clusterRadius={50}
        >
          <Layer {...clusterLayer} />
          <Layer {...clusterCountLayer} />
          <Layer {...unclusteredPointLayer} />
        </Source>
      </Map>

      {hoverInfo && <MapControls {...hoverInfo} />}
    </section>
  );
};
