/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { Jumbotron } from 'react-bootstrap-v1';

function BackgroundHero({
    src,
    zIndex,
    opacity,
    offset,
    contentTop,
    onChangeVisibility,
    children,
    theme,
    title,
    description,
    imageCredits
}) {

    const [topContentBorderRef, topContentBorderInView] = useInView();
    const [backgroundRef, backgroundInView, backgroundEntry] = useInView();

    const jumbotronNode = useRef();
    const backgroundTop = backgroundEntry?.target?.getBoundingClientRect().top || 0;
    const { height: jumbotronHeight, top: jumbotronTop } = jumbotronNode.current?.getBoundingClientRect() || {};
    const height = jumbotronHeight && jumbotronTop && (jumbotronTop - backgroundTop) + jumbotronHeight > window.innerHeight
        ? `${(jumbotronTop - backgroundTop) + jumbotronHeight}px`
        : '100vh';

    useEffect(() => {
        onChangeVisibility('content', topContentBorderInView);
    }, [ onChangeVisibility, topContentBorderInView ]);
    useEffect(() => {
        onChangeVisibility('background', backgroundInView);
    }, [ onChangeVisibility, backgroundInView ]);

    return (
        <>
        <div
            className={`gn-background-hero gn-${theme}`}
            style={{
                position: 'fixed',
                width: '100%',
                height,
                overflow: 'hidden',
                top: 0,
                zIndex
            }}>
            <div style={
                {
                    position: 'absolute',
                    width: '100%',
                    height,
                    backgroundImage: 'url(' + src + ')',
                    backgroundPosition: 'top',
                    backgroundSize: 'cover',
                    opacity,
                    transition: '0.3s opacity'
                }
            } />
        </div>
        {children}
        <div
            ref={topContentBorderRef}
            style={{
                position: 'absolute',
                width: '100%',
                zIndex: 5,
                height: 1,
                backgroundColor: 'transparent',
                top: contentTop - 1,
                pointerEvents: 'none'
            }}
        />
        <div
            ref={backgroundRef}
            style={{
                position: 'relative',
                height: 1,
                width: '100%',
                paddingTop: `calc(${height} - ${offset}px)`,
                marginBottom: offset - 1,
                zIndex: 5,
                backgroundColor: 'transparent',
                pointerEvents: 'none'
            }}>
            <div
                ref={jumbotronNode}
                style={{
                    position: 'absolute',
                    zIndex: 5,
                    width: '100%',
                    top: offset + contentTop * 1.5
                }}>
                {(title || description) && <Jumbotron>
                    {title && <h1>{title}</h1>}
                    {description && <p>{description}</p>}
                </Jumbotron>}
            </div>
            {imageCredits && <div
                className="gn-background-hero-credits"
                style={{
                    bottom: - (offset - 1)
                }}
            >
                {imageCredits}
            </div>}
        </div>
        </>
    );
}

BackgroundHero.defaultProps = {
    offset: 0,
    contentTop: 0,
    onChangeVisibility: () => {},
    theme: 'light'
};

export default BackgroundHero;
