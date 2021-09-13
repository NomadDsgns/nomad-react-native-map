import React from 'react';
import { Dimensions, View, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

export default function({ markers, selectedMarkerHandler, location }) {
    const [ region, setRegion ] = React.useState({ latitude: location.coords.latitude,
                                                    longitude: location.coords.longitude,
                                                    latitudeDelta: region.latitudeDelta,
                                                    longitudeDelta: region.longitudeDelta);

    return (
        <View style={styles.mapContainer}>
            <View style={{ borderRadius: 10, overflow: "hidden", marginTop: 10 }}>
                <MapView
                    style={styles.mapStyle}
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation
                    region={region}>
                        { markers.length > 0 &&
                            markers.map((marker, index) => { 
                                return <Marker id={marker._id} 
                                                key={marker._id} 
                                                coordinate={{ latitude: parseFloat(beacon.latitude), longitude: parseFloat(beacon.longitude) }} 
                                                onPress={(e)=> selectedMarkerHandler(e.nativeEvent.coordinate)} 
                                                radius={1500}
                                                anchor={{x: 0.5, y: 1}}
                                                opacity={1}>
                                                    <Text>*</Text>
                                                </Marker>
                            })
                        }
                </MapView>
            </View>
        </View>
    );
}

const styles = {
    mapContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        width: Dimensions.get('window').width,
    },
    mapStyle: {
        width: (Dimensions.get('window').width - 20),
        height: 250,
        borderRadius: 5
      },
}
