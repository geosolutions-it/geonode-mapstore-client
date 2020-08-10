

import { connect } from 'react-redux';
import { getMonitoredState } from '@mapstore/utils/PluginsUtils';
import { getConfigProp } from '@mapstore/utils/ConfigUtils';
import PluginsContainer from '@mapstore/components/plugins/PluginsContainer';

// this is the MapStore plugin container
// we could use it as main context to create viewer, editors and previews
// for map, dashboard and geostory using the reducers and epics of mapstore plugins
const MapStorePluginsContainer = connect(
    (state) => ({
        monitoredState: getMonitoredState(state, getConfigProp('monitorState'))
    })
)(PluginsContainer);

export default MapStorePluginsContainer;
