define(function () {
  return {
    getTemplate: function () {
      return '<select id="select-employees" name="select-employees" class="form-control"> \
                <option value="" disabled selected>Select employee to update or delete</option> \
                	{{#employees}} \
                      <option value="{{id}}">{{name}}</option> \
                  {{/employees}}\
              </select>'
    }
  };
});

