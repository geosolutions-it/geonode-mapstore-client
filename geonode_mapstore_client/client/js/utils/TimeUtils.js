/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const addTimeOffset = (date, offset = "") => {
    const scaleFunctions = {
        d: {
            setF: 'setDate',
            getF: 'getDate'
        },
        m: {
            setF: 'setMonth',
            getF: 'getMonth'
        },
        y: {
            setF: 'setFullYear',
            getF: 'getFullYear'
        }
    };
    const sign = offset[0] === '-' ? '-' : '+';
    const amountStr = offset.match(/[0-9]+/)?.[0];
    const scale = offset[offset.length - 1];

    if (!date || !amountStr || !scale) {
        return date;
    }

    const amount = parseInt(amountStr, 10);

    let dateObj = new Date(date);
    const curScaleFunctions = scaleFunctions[scale];
    const curValue = dateObj[curScaleFunctions.getF]?.();

    dateObj[curScaleFunctions.setF]?.(sign === '+' ? curValue + amount : curValue - amount);

    return dateObj.toISOString();
};

export const rangeToDates = range => !range ? range : [new Date(range[0]), new Date(range[1])];
