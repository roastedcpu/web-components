/**
 * @license
 * Copyright (c) 2019 - 2021 Vaadin Ltd.
 * This program is available under Commercial Vaadin Developer License 4.0 (CVDLv4).
 * See <a href="https://vaadin.com/license/cvdl-4.0">the website</a> for the complete license.
 */
import { TextField } from '@vaadin/text-field/src/vaadin-text-field.js';

/**
 * An element used internally by `<vaadin-grid-pro>`. Not intended to be used separately.
 *
 * @extends TextField
 * @private
 */
class GridProEditText extends TextField {
  static get is() {
    return 'vaadin-grid-pro-edit-text-field';
  }

  ready() {
    super.ready();
    this.setAttribute('theme', 'grid-pro-editor');
  }
}

customElements.define(GridProEditText.is, GridProEditText);
