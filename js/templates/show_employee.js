define(function () {
  return {
    getTemplate: function () {
      return '<table class="table table-bordered table-hover"> \
                <thead> \
                  <tr> \
                    <th>#id</th> \
                    <th>Name</th> \
                    <th>Department</th> \
                    <th>Position</th> \
                    <th>Salary</th>  \
                    <th>Experience rate</th>  \
                    <th>Breach count</th>  \
                    <th>Is has a pension?</th>  \
                  </tr> \
                </thead> \
                <tbody id="person-nodes"> \
                  <tr>\
                    <th scope="row">{{id}}</th> \
                    <td>{{name}}</td> \
                    <td>{{department}}</td> \
                    <td>{{position}}</td> \
                    <td>{{salary}}</td> \
                    <td>{{experienceRate}}</td> \
                    <td>{{breach}}</td> \
                    <td>{{isHasPension}}</td> \
                </tbody> \
              </table>';
    }
  };
});
