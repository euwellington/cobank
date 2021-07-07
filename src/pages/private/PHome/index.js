import React, { useState, useEffect, useRef, useCallback } from 'react';
import PMenu from '../../../components/PMenu';
import '../../../css/phome.css';
import '../../../css/map.css';
// import { MapContainer, TileLayer, Marker, Popup, GeoJSON, useL } from 'react-leaflet';
import mapbank from '../../../assets/mapbank.png';
import err from '../../../assets/err.png';
import { Dialog } from '@material-ui/core';
import { VscDebugStepInto } from 'react-icons/vsc';
import ReactMapGL, { Marker } from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder'
import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZXV3ZWxsaW5ndG9uIiwiYSI6ImNrcWk0MmFtNjAwNm8ycmxoc2p4bWR6Y2IifQ.uAElJDXf8hJxMJZJXo85gQ';


const PHome = () => {


  const [errLocation, setErrLocation] = useState(false);
  const [userLocation, setUserLocation] = useState({
      latitude: -3.8088293,
      longitude: -38.6343998,
      zoom: 13
    });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
        setUserLocation({
          ...userLocation,
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        });
      }, err => {
        setErrLocation(true);
      });
    }, [userLocation]);

  // ------------- GEOCODER CONFIG ------------- //
  const [infoLocation, setInfoLocation] = useState('');
  const [viewport, setViewport] = useState({
      latitude: -3.8088293,
      longitude: -38.6343998,
      zoom: 13
    });

    const mapRef = useRef();
    const handleViewportChange = useCallback(
      (newViewport) => setViewport(newViewport),
      []
    );

    const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides
      });
    },
    [handleViewportChange]
  );
  // ------------- GEOCODER CONFIG ------------- //

  console.log(infoLocation)

  return (
    <>
    <Dialog open={errLocation}>
      <div className={'errlocation'}>
        <div className={'d-flex justify-content-center'}>
          <img alt={'err'} src={err} className={'errlocationimg'} />
        </div>
        <p className={'errlocation-info'}>Para melhor experiência ative a sua localização no canto superior direto</p>
        {/* <p className={''}> { infoLocation.Place } </p> */}
        <div className={'d-flex justify-content-center'}>
            <button className={'btn btn-outline-light shadow-none'} onClick={() => window.location.reload()}>
              Recarregar a página
            </button>
          </div>
      </div>
    </Dialog>
    <PMenu/>
      <div className="phome d-flex justify-content-center">
        <div className={'phome-left'}>
          <ReactMapGL
            ref={mapRef}
            {...viewport}
            width="100%"
            height="89.5vh"
            // onViewportChange={nextViewport => setViewport(nextViewport)}
            onViewportChange={handleViewportChange}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            >
              <Geocoder
                mapRef={mapRef}
                onViewportChange={handleGeocoderViewportChange}
                mapboxApiAccessToken={MAPBOX_TOKEN}
                position="top-left"
                placeholder={'Pesquise aqui'}
                onInit={ item => setInfoLocation(item.inputString)}
              />
              <Marker latitude={viewport.latitude} longitude={viewport.longitude}>
                <VscDebugStepInto size={35} color={'rgb(146, 8, 238)'} />
              </Marker>
          </ReactMapGL>
        </div>
        <div className={'phome-right'}>
          <div style={{margin: 'auto'}}>
            <div className={'d-flex justify-content-center'}>
              <img alt={'mapbank'} src={mapbank} className={'mapbank'} />
            </div>
            <p className={'mapbank-title'}>Caixas 24h</p>
            <div className={'d-flex justify-content-center'}>
              <p className={'mapbank-subtitle'}>Procure algum caixa eletrônico mais próximo de você e faça saque e consulte saldo em caso de emegência ou use o nosso aplicativo para tirar alguma dúvida</p>
            </div>
            <div className={'d-flex justify-content-center'}>
              <p className={'mapbankinfo-title'}>Informação</p>
            </div>
            <div className={'d-flex justify-content-center'}>
              <p className={'mapbankinfo-subtitle'}>{ infoLocation }</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PHome;