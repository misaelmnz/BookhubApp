import React from 'react';
import { View } from 'react-native';

export const root = {
    C_BACKGROUND_COLOR: '#FFF8E7',
    C_BADGE_COLOR: '#F8F8F8',
    C_MAIN_COLOR: '#FEAE51',
    C_SUB_COLOR: '#FD843F',
    C_PURPLE: '#A193E0',
    C_BLACK: '#040111',
    C_WHITE: '#FFFFFF',
    C_FONT: '"Inter-Regular"',
}

export default function Container({
    children,
    style,
    backgroundColor = root.C_BACKGROUND_COLOR,
    padding = 0,
    margin = 0,
    borderRadius = 0,
}) {
    return (
        <View
            style={{
                backgroundColor: backgroundColor,
                padding: padding,
                margin: margin,
                borderRadius: borderRadius,
                ...style
            }}
        >
            {children}
        </View>
    );
}
export function ContainerWithBackground({ children, style }) {
    return (
        <Container
            style={{
                backgroundColor: root.C_BACKGROUND_COLOR,
                ...style
            }}
        >
            {children}
        </Container>
    );
}
export function ContainerWithMainColor({ children, style }) {
    return (
        <Container
            style={{
                backgroundColor: root.C_MAIN_COLOR,
                ...style
            }}
        >
            {children}
        </Container>
    );
}
export function ContainerWithSubColor({ children, style }) {
    return (
        <Container
            style={{
                backgroundColor: root.C_SUB_COLOR,
                ...style
            }}
        >
            {children}
        </Container>
    );
}
export function ContainerWithPurple({ children, style }) {
    return (
        <Container
            style={{
                backgroundColor: root.C_PURPLE,
                ...style
            }}
        >
            {children}
        </Container>
    );
}
export function ContainerWithBlack({ children, style }) {
    return (
        <Container
            style={{
                backgroundColor: root.C_BLACK,
                ...style
            }}
        >
            {children}
        </Container>
    );
}
export function ContainerWithWhite({ children, style }) {
    return (
        <Container
            style={{
                backgroundColor: root.C_WHITE,
                ...style
            }}
        >
            {children}
        </Container>
    );
}
export function ContainerWithBadgeColor({ children, style }) {
    return (
        <Container
            style={{
                backgroundColor: root.C_BADGE_COLOR,
                ...style
            }}
        >
            {children}
        </Container>
    );
}

