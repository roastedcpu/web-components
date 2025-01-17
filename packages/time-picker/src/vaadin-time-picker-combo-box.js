/**
 * @license
 * Copyright (c) 2021 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { ComboBoxMixin } from '@vaadin/combo-box/src/vaadin-combo-box-mixin.js';
import { ThemableMixin } from '@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';
import './vaadin-time-picker-dropdown.js';

/**
 * An element used internally by `<vaadin-time-picker>`. Not intended to be used separately.
 *
 * @extends HTMLElement
 * @mixes ComboBoxMixin
 * @mixes ThemableMixin
 */
class TimePickerComboBox extends ComboBoxMixin(ThemableMixin(PolymerElement)) {
  static get is() {
    return 'vaadin-time-picker-combo-box';
  }

  static get template() {
    return html`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <slot></slot>

      <vaadin-time-picker-dropdown
        id="dropdown"
        opened="[[opened]]"
        position-target="[[positionTarget]]"
        renderer="[[renderer]]"
        _focused-index="[[_focusedIndex]]"
        _item-id-path="[[itemIdPath]]"
        _item-label-path="[[itemLabelPath]]"
        loading="[[loading]]"
        theme="[[theme]]"
      ></vaadin-time-picker-dropdown>
    `;
  }

  static get properties() {
    return {
      positionTarget: {
        type: Object
      }
    };
  }

  /**
   * Reference to the clear button element.
   * @protected
   * @return {!HTMLElement}
   */
  get clearElement() {
    return this.querySelector('[part="clear-button"]');
  }

  /**
   * @protected
   * @override
   */
  _getItemElements() {
    return Array.from(this.$.dropdown._scroller.querySelectorAll('vaadin-time-picker-item'));
  }

  /** @protected */
  ready() {
    super.ready();

    this.allowCustomValue = true;
    this._toggleElement = this.querySelector('.toggle-button');

    // See https://github.com/vaadin/vaadin-time-picker/issues/145
    this.setAttribute('dir', 'ltr');
  }

  /** @protected */
  _isClearButton(event) {
    return (
      super._isClearButton(event) ||
      (event.type === 'input' && !event.isTrusted) || // fake input event dispatched by clear button
      event.composedPath()[0].getAttribute('part') === 'clear-button'
    );
  }

  /**
   * @param {!Event} event
   * @protected
   */
  _onChange(event) {
    super._onChange(event);

    if (this._isClearButton(event)) {
      this._clear();
    }
  }
}

customElements.define(TimePickerComboBox.is, TimePickerComboBox);
