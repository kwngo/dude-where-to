import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const MapboxGl = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiYXBvY2hvY29sYXRlIiwiYSI6ImNqdWZydmh0cTBoZDU0NHBidHo1b3JnaDQifQ.Y_z_8Ghzpp4zWX1uAxiUEw",
});

function Map() {
  return (
    <MapboxGl
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: "100vh",
        width: "100vw"
      }}>
        <Layer
          type="symbol"
          id="marker"
          layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
        </Layer>
    </MapboxGl>
  )

}

export default Map;
