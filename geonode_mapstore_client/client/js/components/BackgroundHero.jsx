/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function BackgroundHero({
    src,
    height,
    zIndex,
    opacity,
    offset,
    contentTop,
    onChangeVisibility,
    children
}) {
    const [topContentBorderRef, topContentBorderInView] = useInView();
    const [backgroundRef, backgroundInView] = useInView();

    useEffect(() => {
        onChangeVisibility('content', topContentBorderInView);
    }, [ onChangeVisibility, topContentBorderInView ]);
    useEffect(() => {
        onChangeVisibility('background', backgroundInView);
    }, [ onChangeVisibility, backgroundInView ]);

    return (
        <>
        <div
            className="gn-background-hero"
            style={{
                position: 'fixed',
                width: '100%',
                height,
                overflow: 'hidden',
                backgroundColor: '#a4b6e5',
                top: 0,
                zIndex
            }}>
            <div style={
                {
                    position: 'absolute',
                    width: '100%',
                    height: '100vh',
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
                top: contentTop - 8,
                pointerEvents: 'none'
            }}
        />
        <div
            ref={backgroundRef}
            style={{
                position: 'relative',
                height: 1,
                width: '100%',
                paddingTop: `calc(100vh - ${offset}px)`,
                marginBottom: offset - 1,
                zIndex: 5,
                backgroundColor: 'transparent',
                pointerEvents: 'none'
            }}>
            <div style={{
                position: 'absolute',
                zIndex: 5,
                width: '100%',
                top: offset + contentTop * 1.5
            }}>
                {/* <Jumbotron style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                    <h1>Hello, world!</h1>
                    <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat
                    </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron> */}
            </div>
        </div>
        </>
    );
}

BackgroundHero.defaultProps = {
    height: '100vh',
    offset: 0,
    contentTop: 0,
    onChangeVisibility: () => {}
};

export default BackgroundHero;
