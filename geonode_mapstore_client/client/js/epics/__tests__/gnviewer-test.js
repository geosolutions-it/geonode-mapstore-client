import expect from 'expect';
import { gnViewerRequestNewMapConfig } from '@js/epics/gnviewer';

import { requestNewMapConfig } from '@js/actions/gnviewer';
import MockAdapter from 'axios-mock-adapter';
import axios from '@mapstore/framework/libs/ajax';
import { testEpic } from '@mapstore/framework/epics/__tests__/epicTestUtils';
let mockAxios;

describe("gnviewer epics", () => {
    beforeEach(done => {
        mockAxios = new MockAdapter(axios);
        setTimeout(done);
    });
    afterEach(done => {
        delete global.__DEVTOOLS__;
        mockAxios.restore();
        setTimeout(done);
    });


    it("should call mapConfig", (done) => {
        mockAxios.onGet().reply(() => [200, {}]);
        const NUM_ACTIONS = 1;
        testEpic(
            gnViewerRequestNewMapConfig,
            NUM_ACTIONS,
            requestNewMapConfig(),
            (actions) => {
                try {
                    expect(actions.map(({ type }) => type)).toEqual(["MAP_CONFIG_LOADED"]);
                    done();
                } catch (error) {
                    done(error);
                }
            },
            { security: { user: { perms: ["add_resource"] } } });

    });

});
