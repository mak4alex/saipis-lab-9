define(function (require) {
  var $ = require('jquery'),
      Mustache = require('mustache'),
      select_employees = require('select_employees'),
      handleBreach = require('handleBreach'),
      handleExperience = require('handleExperience'),
      handlePension = require('handlePension'),
      show_employee = require('show_employee'),
      show_average_department_salary = require('show_average_department_salary');

  var urlJson = 'json/data.json',
      employees;


  $.getJSON(urlJson, function (data) {
    employees = data['employees'];
    var employee;
    for (var i in employees) {
      employee = employees[i];
      employee.salary = 0;
      employee.experienceRate = 0;
      employee.breach = 0;
      employee.isHasPension = false;
    }
    var info = Mustache.to_html(select_employees.getTemplate(), data);
    $('#select-employees-box').html(info);
  }).done(function () {
    console.log("Data loaded");
  }).fail(function() {
    console.log( "Loaded error" );
  });


  $(document).ready(function() {
    $('#person-form').on('change', 'select#select-employees', function() {
      $("#update-node").removeAttr('disabled');
      $("#show-node").removeAttr('disabled');
    });

    $("form#person-form").submit(function (e) {
      e.preventDefault();
      var data = $(this).serializeArray();
      console.log(data);
      var employee = $.grep(employees, function(e) {
        return e.id == data[0].value;
      })[0];
      console.log(employee);

      employee.salary = data[1].value;
      employee.experienceRate  = data[2].value;
      employee.breach  = data[3].value;
      employee.isHasPension = false;

      employee.salary = handleBreach.calculateSalary(employee.salary, employee.breach);
      employee.salary = handleExperience.calculateSalary(employee.salary, employee.experienceRate );

      if(data[4]) {
        employee.isHasPension = true;
        employee.salary = handlePension.calculateSalary(employee.salary, 3.33 )
      }

      console.log("salary: " + employee.salary);
    });

    $("#show-node").click(function() {
      var id = $("#select-employees").find(":selected").val();
      var info = Mustache.to_html(show_employee.getTemplate(), employees[id - 1]);
      $('#table').html(info);
    });

    $("#show-aver-salary").click(function() {
      var departments = [];
      var output = {
        results: []
      };

      for (var i in employees) {
        departments.push( employees[i].department );
      }

      departments = departments.filter( onlyUnique );
      console.log(departments);

      for(var j in departments) {
        var departmentEmployees = $.grep(employees, function(e) {
          return e.department == departments[j];
        });

        var averageSalary = 0;
        for(var k in departmentEmployees ) {
          averageSalary += departmentEmployees[k].salary;
        }
        averageSalary /= departmentEmployees.length;

        var result = {
          department: departments[j],
          salary: averageSalary
        };

        output.results.push(result);
      }

      var info = Mustache.to_html(show_average_department_salary.getTemplate(), output);
      $('#table').html(info);

    });
  });
});

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}