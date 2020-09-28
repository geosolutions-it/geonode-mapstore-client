

/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useMemo } from 'react';
import tinycolor from 'tinycolor2';

function rootVariables(variables) {
    return ':root {\n' +
    Object.keys(variables)
        .filter(key => variables[key])
        .map((key) => `\t${key}: ${variables[key]};`).join('\n') +
    '\n}';
}

function RootStyle({
    theme
}) {

    const variables = useMemo(() => {
        if (theme.base) {
            const {
                base,
                link = {},
                tag = {},
                primary = {}
            } = theme;
            const readableColor = tinycolor.mostReadable(base, ['#ffffff', '#000000'], {
                includeFallbackColors: true
            }).toHexString();
            const darkenBase = tinycolor(base).darken(25);
            const color = primary.color ? primary.color : readableColor;
            return {
                '--gn-primary-color': color,
                '--gn-primary-bg': primary.backgroundColor ? primary.backgroundColor : base,
                '--gn-primary-hover-bg': primary.hoverBackgroundColor ? primary.hoverBackgroundColor : darkenBase,
                '--gn-link-color': link.color ? link.color : base,
                '--gn-link-hover-color': link.hoverColor ? link.hoverColor : darkenBase,
                '--gn-tag-hover-color': tag.hoverColor ? tag.hoverColor : undefined,
                '--gn-tag-hover-bg': tag.hoverBackgroundColor ? tag.hoverBackgroundColor : tinycolor(base).setAlpha(0.3),
                '--gn-tag-active-color': tag.activeColor ? tag.activeColor : undefined,
                '--gn-tag-active-bg': tag.activeBackgroundColor ? tag.activeBackgroundColor : tinycolor(base).setAlpha(0.2),
                '--gn-tag-active-border-color': tag.activeBorderColor ? tag.activeBorderColor : base
            };
        }
        return {};
    }, [theme]);
    return (
        <style dangerouslySetInnerHTML={{
            __html: rootVariables(variables)
        }} />
    );
}

RootStyle.defaultProps = {
    theme: {}
};

export default RootStyle;
