/**
 * @license
 * Copyright (c) 2021 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { ComboBoxOverlay } from '@vaadin/vaadin-combo-box/src/vaadin-combo-box-overlay.js';
import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';

registerStyles(
  'vaadin-time-picker-overlay',
  css`
    #overlay {
      width: var(--vaadin-time-picker-overlay-width, var(--_vaadin-time-picker-overlay-default-width, auto));
    }
  `,
  { moduleId: 'vaadin-time-picker-overlay-styles' }
);

/**
 * An element used internally by `<vaadin-time-picker>`. Not intended to be used separately.
 *
 * @extends ComboBoxOverlay
 * @private
 */
class TimePickerOverlay extends ComboBoxOverlay {
  static get is() {
    return 'vaadin-time-picker-overlay';
  }
}

customElements.define(TimePickerOverlay.is, TimePickerOverlay);