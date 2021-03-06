/**
`<d2l-loading-spinner>` is a simple infinite loading indicator.

@demo demo/index.html
@element d2l-loading-spinner
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'd2l-colors/d2l-colors.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-loading-spinner">
	<template strip-whitespace="">
		<style>
			:host {
				color: var(--d2l-loading-spinner-color, var(--d2l-color-celestine));
				display: inline-block;
				text-align: initial;
			}
			/* required since display of inline-block is non-default */
			:host([hidden]) {
				display: none;
			}

			:host .d2l-loading-spinner-wrapper {
				height: var(--d2l-loading-spinner-size, 50px);
				margin: auto;
				overflow: hidden;
				position: relative;
				width: var(--d2l-loading-spinner-size, 50px);
			}

			:host .d2l-loading-spinner-bg,
			:host .d2l-loading-spinner-bg-blur {
				height: 100%;
				position: absolute;
				top: 0;
				width: 100%;
				stroke: var(--d2l-loading-spinner-color, var(--d2l-color-celestine));
			}

			:host .d2l-loading-spinner-bg-stroke {
				stroke: #ededfa;
			}

			:host .d2l-loading-spinner-bg-blur {
				opacity: 0.1;
				filter: blur(calc(var(--d2l-loading-spinner-size, 50px) / 10));
			}

			:host .d2l-loading-spinner-slice1,
			:host .d2l-loading-spinner-slice2,
			:host .d2l-loading-spinner-slice3,
			:host .d2l-loading-spinner-slice4,
			:host .d2l-loading-spinner-slice5 {
				animation-duration: 1.5s;
				animation-iteration-count: infinite;
				animation-timing-function: cubic-bezier(.5,0,.5,1);
				height: 50%;
				position: absolute;
				top: 0;
				transform-origin: left bottom;
				left: 50%;
				width: 50%;
			}

			:host .d2l-loading-spinner-slice1 {
				animation-name: slicespin1;
				transform: rotate(54deg);
			}
			:host .d2l-loading-spinner-slice2 {
				animation-name: slicespin2;
				transform: rotate(124deg);
			}
			:host .d2l-loading-spinner-slice3 {
				animation-name: slicespin3;
				transform: rotate(198deg);
			}
			:host .d2l-loading-spinner-slice4 {
				animation-name: slicespin4;
				transform: rotate(270deg);
			}
			:host .d2l-loading-spinner-slice5 {
				animation-name: slicespin5;
				transform: rotate(344deg);
			}

			@keyframes slicespin1 {
				0% { transform: rotate(54deg); }
				80%, 100% { transform: rotate(430deg); }
			}

			@keyframes slicespin2 {
				0%, 10% { transform: rotate(124deg); }
				80%, 100% { transform: rotate(500deg); }
			}

			@keyframes slicespin3 {
				0%, 20% { transform: rotate(198deg); }
				80%, 100% { transform: rotate(574deg); }
			}

			@keyframes slicespin4 {
				0%, 35%{ transform: rotate(270deg); }
				80%, 100% { transform: rotate(644deg); }
			}

			@keyframes slicespin5 {
				0%, 60%, { transform: rotate(344deg); }
				80%, 100% { transform: rotate(720deg); }
			}

		</style>
		<div class="d2l-loading-spinner-wrapper">
			<svg viewBox="0 0 42 42" class="d2l-loading-spinner-bg-blur" focusable="false">
				<g fill="none" fill-rule="evenodd" transform="translate(5 5)">
					<circle stroke="none" fill="#000" cx="16" cy="16" r="14"></circle>
				</g>
			</svg>
			<svg viewBox="0 0 42 42" class="d2l-loading-spinner-bg" focusable="false">
				<g fill="none" fill-rule="evenodd" transform="translate(5 5)">
					<circle stroke-width="0.5" cx="16" cy="16" r="16" class="d2l-loading-spinner-bg-stroke"></circle>
					<circle stroke="none" fill="#FFF" cx="16" cy="16" r="16"></circle>
					<circle stroke-width="2" cx="16" cy="16" r="11"></circle>
				</g>
			</svg>
			<svg viewBox="0 0 42 42" class="d2l-loading-spinner-slice1" focusable="false">
				<g fill="none" fill-rule="evenodd">
					<path d="M24 42h8c0-17.673-14.327-32-32-32v8c1.105 0 2 .895 2 2s-.895 2-2 2v20h20c0-1.105.895-2 2-2s2 .895 2 2z" fill="#FFF"></path>
					<path d="M0 22c1.105 0 2-.895 2-2s-.895-2-2-2c13.255 0 24 10.745 24 24 0-1.105-.895-2-2-2s-2 .895-2 2c0-11.046-8.954-20-20-20z" fill="#E6EAF0"></path>
				</g>
			</svg>
			<svg viewBox="0 0 42 42" class="d2l-loading-spinner-slice2" focusable="false">
				<g fill="none" fill-rule="evenodd">
					<path d="M24 42h8c0-17.673-14.327-32-32-32v8c1.105 0 2 .895 2 2s-.895 2-2 2v20h20c0-1.105.895-2 2-2s2 .895 2 2z" fill="#FFF"></path>
					<path d="M0 22c1.105 0 2-.895 2-2s-.895-2-2-2c13.255 0 24 10.745 24 24 0-1.105-.895-2-2-2s-2 .895-2 2c0-11.046-8.954-20-20-20z" fill="#E6EAF0"></path>
				</g>
			</svg>
			<svg viewBox="0 0 42 42" class="d2l-loading-spinner-slice3" focusable="false">
				<g fill="none" fill-rule="evenodd">
					<path d="M24 42h8c0-17.673-14.327-32-32-32v8c1.105 0 2 .895 2 2s-.895 2-2 2v20h20c0-1.105.895-2 2-2s2 .895 2 2z" fill="#FFF"></path>
					<path d="M0 22c1.105 0 2-.895 2-2s-.895-2-2-2c13.255 0 24 10.745 24 24 0-1.105-.895-2-2-2s-2 .895-2 2c0-11.046-8.954-20-20-20z" fill="#E6EAF0"></path>
				</g>
			</svg>
			<svg viewBox="0 0 42 42" class="d2l-loading-spinner-slice4" focusable="false">
				<g fill="none" fill-rule="evenodd">
					<path d="M24 42h8c0-17.673-14.327-32-32-32v8c1.105 0 2 .895 2 2s-.895 2-2 2v20h20c0-1.105.895-2 2-2s2 .895 2 2z" fill="#FFF"></path>
					<path d="M0 22c1.105 0 2-.895 2-2s-.895-2-2-2c13.255 0 24 10.745 24 24 0-1.105-.895-2-2-2s-2 .895-2 2c0-11.046-8.954-20-20-20z" fill="#E6EAF0"></path>
				</g>
			</svg>
			<svg viewBox="0 0 42 42" class="d2l-loading-spinner-slice5" focusable="false">
				<g fill="none" fill-rule="evenodd">
					<path d="M24 42h8c0-17.673-14.327-32-32-32v8c1.105 0 2 .895 2 2s-.895 2-2 2v20h20c0-1.105.895-2 2-2s2 .895 2 2z" fill="#FFF"></path>
					<path d="M0 22c1.105 0 2-.895 2-2s-.895-2-2-2c13.255 0 24 10.745 24 24 0-1.105-.895-2-2-2s-2 .895-2 2c0-11.046-8.954-20-20-20z" fill="#E6EAF0"></path>
				</g>
			</svg>
		</div>
	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-loading-spinner',
	properties: {
		/**
		 * While not recommended, the default color (blue) can be overidden using the `color` attribute.
		 */
		color: {
			observer: '_colorChanged',
			type: String
		},
		/**
		 * Adjusts the size of the spinner, default is `50`.
		 */
		size: {
			observer: '_sizeChanged',
			type: Number
		}
	},
	_colorChanged: function(newColor) {
		this.updateStyles({'--d2l-loading-spinner-color': newColor});
	},
	_sizeChanged: function(newSize) {
		this.updateStyles({'--d2l-loading-spinner-size': newSize + 'px'});
	}
});
