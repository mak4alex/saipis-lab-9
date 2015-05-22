requirejs.config({
  baseUrl: "./",
  paths: {
    mustache: 'bower_components/mustache.js/mustache.min',

    select_employees: 'js/templates/select_employees',
    show_employee: 'js/templates/show_employee',
    show_average_department_salary: 'js/templates/show_average_department_salary',

    handleBreach: 'js/modules/handleBreach',
    handleExperience: 'js/modules/handleExperience',
    handlePension: 'js/modules/handlePension',
    jquery: 'bower_components/jquery/dist/jquery.min'
  }
});

requirejs(['js/app/main']);