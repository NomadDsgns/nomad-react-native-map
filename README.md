# [Nomad Dsgns](https://www.nomaddsgns.com) custom Map with marker function for handling marker taps #
React Native custom map Component with handler for selecting markers on map

## Instructions for Use ##
1. Clone Component to project:
    - Command Line: git clone https://github.com/NomadDsgns/nomad-react-native-map.git
    - -or- Copy and paste code into new file
2. Import into file where it's to be used in the project:
    - Add to top of file where component will be used: import NomadMap from './NomadMap.js
3. Add component into project code and pass in required/desired props:
    - markers (required): An array of markers to be displayed on map
    - selectedMarkerHandler (require): function to execute when a mark from `markers` array is clicked on
    - location (required): location object with users location information
    - markerElement (required): element to display for each marker on map (ie: <Image /> element)

