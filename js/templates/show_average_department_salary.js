define(function () {
  return {
    getTemplate: function () {
      return '<table class="table table-bordered table-hover"> \
                <thead> \
                  <tr> \
                    <th>Department</th> \
                    <th>Average salary</th>  \
                  </tr> \
                </thead> \
                <tbody> \
                  {{#results}} \
                    <tr> \
                      <td>{{department}}</td> \
                      <td>{{salary}}</td> \
                    </tr>       \
                  {{/results}}\
              </tbody> \
              </table>';
    }
  };
});
