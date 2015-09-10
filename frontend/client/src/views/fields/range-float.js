/************************************************************************
 * This file is part of EspoCRM.
 *
 * EspoCRM - Open Source CRM application.
 * Copyright (C) 2014-2015 Yuri Kuznetsov, Taras Machyshyn, Oleksiy Avramenko
 * Website: http://www.espocrm.com
 *
 * EspoCRM is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * EspoCRM is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with EspoCRM. If not, see http://www.gnu.org/licenses/.
 ************************************************************************/

Espo.define('views/fields/range-float', ['views/fields/range-int', 'views/fields/float'], function (Dep, Float) {

    return Dep.extend({

        type: 'rangeFloat',

        validations: ['required', 'float', 'range', 'order'],

        validateFloat: function () {
            var validate = function (name) {
                if (isNaN(this.model.get(name))) {
                    var msg = this.translate('fieldShouldBeFloat', 'messages').replace('{field}', this.translate(this.name, 'fields', this.model.name));
                    this.showValidationMessage(msg, '[name="'+name+'"]');
                    return true;
                }
            }.bind(this);

            var result = false;
            result = validate(this.fromField) || result;
            result = validate(this.toField) || result;
            return result;
        },

        parse: function (value) {
            return Float.prototype.parse.call(this, value);
        },

        formatNumber: function (value) {
            return Float.prototype.formatNumber.call(this, value);
        },

    });
});
