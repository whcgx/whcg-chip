import '@vaadin/vaadin-button/src/vaadin-button.js';
import '@whcg/whcg-chip/theme/whcg-chip-styles.js';
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

class WhcgChip extends PolymerElement {
    static get template() {
        return html `
        <style>
             vaadin-button {
                --whcg-host-font-size: var(--whcg-chip-host-font-size);
                --whcg-host-color: var(--whcg-chip-host-color);
                --whcg-host-background-color: var(--whcg-chip-host-background-color);
                --whcg-host-border-radius: var(--whcg-chip-host-border-radius);
                --whcg-host-border-style: var(--whcg-chip-host-border-style);
                --whcg-host-border-width: var(--whcg-chip-host-border-width);
                --whcg-host-border-color: var(--whcg-chip-host-border-color);
                
                --whcg-host-height: var(--whcg-chip-host-height);
                --whcg-host-min-width: var(--whcg-chip-host-min-width);
                --whcg-host-padding-top: var(--whcg-chip-host-padding-top);
                --whcg-host-padding-bottom: var(--whcg-chip-host-padding-bottom);
                --whcg-host-padding-left: var(--whcg-chip-host-padding-left);
                --whcg-host-padding-right: var(--whcg-chip-host-padding-right);
                
                --whcg-label-font-size: var(--whcg-chip-label-font-size);
                --whcg-label-font-family: var(--whcg-chip-label-font-family);
                --whcg-label-font-weight: var(--whcg-chip-label-font-weight);
                --whcg-label-line-height: var(--whcg-chip-label-line-height); 
                --whcg-label-padding-top: var(--whcg-chip-label-padding-top);
                --whcg-label-padding-bottom: var(--whcg-chip-label-padding-bottom);
                --whcg-label-padding-left: var(--whcg-chip-label-padding-left);
                --whcg-label-padding-right: var(--whcg-chip-label-padding-right);
             }
            

        </style>

        <vaadin-button>
             <slot></slot>
        </vaadin-button>
    `
    };   
}

window.customElements.define('whcg-chip', WhcgChip);

export { WhcgChip };
