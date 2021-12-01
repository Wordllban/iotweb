/// <reference types="react-scripts" />
declare module '*.ts';
declare module '*.jpg';
declare module '*.png';
declare module '*.svg';
declare module '*.scss' {
    const content: {[className: string]: string};
    export = content;
}