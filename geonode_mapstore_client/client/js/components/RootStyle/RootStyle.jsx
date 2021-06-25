

/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useMemo } from 'react';
import tinycolor from 'tinycolor2';

function rootVariables(variables, selector = ':root') {
    return selector + ' {\n' +
    Object.keys(variables)
        .filter(key => variables[key])
        .map((key) => `\t${key}: ${variables[key]};`).join('\n') +
    '\n}';
}

function buttonTheme(style, name) {
    const prefix = name ? '-' + name : '';
    const bg = style.bg;
    const color = style.color || tinycolor.mostReadable(bg, ['#ffffff', '#000000'], {
        includeFallbackColors: true
    }).toHexString();

    const borderColor = style.borderColor || bg;
    const focusColor = style.focusColor || color;
    const focusBg = style.focusBg || tinycolor(bg).darken(10).toString();
    const focusBorderColor = style.focusBorderColor || tinycolor(bg).darken(25).toString();
    const hoverColor = style.hoverColor || color;
    const hoverBg = style.hoverBg || tinycolor(bg).darken(10).toString();
    const hoverBorderColor = style.hoverBorderColor || tinycolor(bg).darken(12).toString();
    const activeColor = style.activeColor || color;
    const activeBg = style.activeBg || tinycolor(bg).darken(10).toString();
    const activeBorderColor = style.activeBorderColor || tinycolor(bg).darken(12).toString();
    const activeHoverColor = style.activeHoverColor || color;
    const activeHoverBg = style.activeHoverBg || tinycolor(bg).darken(17).toString();
    const activeHoverBorderColor = style.activeHoverBorderColor || tinycolor(bg).darken(25).toString();
    const disableColor = style.disableColor || color;
    const disabledBg = style.disabledBg || tinycolor(tinycolor(bg).desaturate(30).toString()).lighten(20).toString();
    const disabledBorderColor = style.disabledBorderColor || tinycolor(tinycolor(bg).desaturate(30).toString()).lighten(20).toString();
    const badgeColor = style.badgeColor || bg;
    const badgeBg = style.badgeBg || color;
    return {
        [`--gn-button${prefix}-color`]: color,
        [`--gn-button${prefix}-bg`]: bg,
        [`--gn-button${prefix}-border-color`]: borderColor,
        [`--gn-button${prefix}-focus-color`]: focusColor,
        [`--gn-button${prefix}-focus-bg`]: focusBg,
        [`--gn-button${prefix}-focus-border-color`]: focusBorderColor,
        [`--gn-button${prefix}-hover-color`]: hoverColor,
        [`--gn-button${prefix}-hover-bg`]: hoverBg,
        [`--gn-button${prefix}-hover-border-color`]: hoverBorderColor,
        [`--gn-button${prefix}-active-color`]: activeColor,
        [`--gn-button${prefix}-active-bg`]: activeBg,
        [`--gn-button${prefix}-active-border-color`]: activeBorderColor,
        [`--gn-button${prefix}-active-hover-color`]: activeHoverColor,
        [`--gn-button${prefix}-active-hover-bg`]: activeHoverBg,
        [`--gn-button${prefix}-active-hover-border-color`]: activeHoverBorderColor,
        [`--gn-button${prefix}-disabled-color`]: disableColor,
        [`--gn-button${prefix}-disabled-bg`]: disabledBg,
        [`--gn-button${prefix}-disabled-border-color`]: disabledBorderColor,
        [`--gn-button${prefix}-badge-color`]: badgeColor,
        [`--gn-button${prefix}-badge-bg`]: badgeBg
    };
}

function RootStyle({
    targetId,
    theme
}) {

    const variables = useMemo(() => {
        if (theme) {
            const {
                color: themeColor,
                body,
                bodyShade,
                placeholder,
                disabled,
                info,
                success,
                warning,
                danger,
                primary,
                link,
                image,
                jumbotron,
                focus,
                tag,
                badge,
                footer,
                buttonDefault,
                buttonPrimary,
                buttonInfo,
                buttonSuccess,
                buttonWarning,
                buttonDanger
            } = theme;

            const bg = primary?.value || themeColor;
            const color = primary?.contrast || bg && tinycolor.mostReadable(bg, ['#ffffff', '#000000'], {
                includeFallbackColors: true
            }).toHexString();

            const btnPrimary = (bg || buttonPrimary) && {
                ...(bg && { bg }),
                ...(color && { color }),
                ...buttonPrimary
            };

            return {
                ...(bg && {
                    '--gn-primary-contrast': color,
                    '--gn-primary': bg,
                    '--gn-loader-primary-color': bg,
                    '--gn-loader-primary-fade-color': tinycolor(bg).setAlpha(0.2).toString(),
                    '--gn-loader-primary-contrast-color': color,
                    '--gn-loader-primary-contrast-fade-color': tinycolor(color).setAlpha(0.2).toString()
                }),
                ...(body && {
                    ' --gn-main-color': body.color || '#000000',
                    '--gn-main-bg': body.bg || '#ffffff',
                    '--gn-main-border-color': body.borderColor || '#dddddd',
                    '--gn-loader-color': '',
                    '--gn-loader-fade-color': ''
                }),
                ...(bodyShade && {
                    '--gn-main-variant-color': bodyShade.color || '#000000',
                    '--gn-main-variant-bg': bodyShade.bg || '#f2f0f0'
                }),
                ...(placeholder && {
                    '--gn-placeholder-color': placeholder.color || '#aaaaaa',
                    '--gn-placeholder-bg': placeholder.bg || '#dddddd'
                }),
                ...(disabled && {
                    '--gn-disabled-color': disabled.color || '#acacac',
                    '--gn-disabled-bg': disabled.bg || '#fcfcfc'
                }),
                ...(primary && {
                    '--gn-primary-contrast': primary.contrast || '#ffffff',
                    '--gn-primary': primary.value || '#397AAB'
                }),
                ...(info && {
                    '--gn-info-contrast': info.contrast || '#ffffff',
                    '--gn-info': info.value || '#639fcc'
                }),
                ...(success && {
                    '--gn-success-contrast': success.contrast || '#ffffff',
                    '--gn-success': success.value || '#58cf80'
                }),
                ...(warning && {
                    '--gn-warning-contrast': warning.contrast || '#ffffff',
                    '--gn-warning': warning.value || '#ebbc35'
                }),
                ...(danger && {
                    '--gn-danger-contrast': danger.contrast || '#ffffff',
                    '--gn-danger': danger.value || '#bb4940'
                }),
                ...(link && {
                    '--gn-link-color': link.color || '#397AAB',
                    '--gn-link-hover-color': link.hoverColor || '#1b4d74'
                }),
                ...(image && {
                    '--gn-image-color': image.color || '#ffffff',
                    '--gn-image-bg': image.bg || '#333333'
                }),
                ...(jumbotron && {
                    '--gn-jumbotron-color': jumbotron.color || '#ffffff',
                    '--gn-jumbotron-bg': jumbotron.bg || '#333333'
                }),
                ...(focus && {
                    '--gn-focus-color': focus.color || 'rgba(#397AAB, 0.4)'
                }),
                ...(tag && {
                    '--gn-tag-color': tag.color || '#000000',
                    '--gn-tag-hover-color': tag.hoverColor || '#ffffff',
                    '--gn-tag-hover-bg': tag.hoverBg || 'rgba(#397AAB, 0.75)',
                    '--gn-tag-active-color': tag.activeColor || '#ffffff',
                    '--gn-tag-active-bg': tag.activeBg || '#397AAB'
                }),
                ...(tag && {
                    '--gn-badge-color': badge.color || '#f2f2f2',
                    '--gn-badge-bg': badge.bg || '#777777'
                }),
                ...(footer && {
                    '--gn-footer-color': footer.color || '#000000',
                    '--gn-footer-bg': footer.bg || '#ffffff',
                    ...(footer?.link && {
                        '--gn-footer-link-color': footer.link.color || '#397AAB',
                        '--gn-footer-link-hover-color': footer.link.hoverColor || '#1b4d74'
                    })
                }),
                ...(buttonDefault?.bg && buttonTheme(buttonDefault)),
                ...(buttonInfo?.bg && buttonTheme(buttonInfo, 'info')),
                ...(buttonSuccess?.bg && buttonTheme(buttonSuccess, 'success')),
                ...(buttonWarning?.bg && buttonTheme(buttonWarning, 'warning')),
                ...(buttonDanger?.bg && buttonTheme(buttonDanger, 'danger')),
                ...(btnPrimary?.bg && buttonTheme(btnPrimary, 'primary'))
            };
        }
        return {};
    }, [theme]);
    return (
        <style dangerouslySetInnerHTML={{
            __html: rootVariables(variables, `#${targetId}`)
        }} />
    );
}

RootStyle.defaultProps = {
    theme: {}
};

export default RootStyle;
