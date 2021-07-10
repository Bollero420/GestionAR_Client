import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const Navigator = {
  main: '/main',
  attendances: '/attendances',
  grades: '/grades',
  sign_in: '/signIn',
  student_form: '/studentForm',
  reports: '/reports',
  student_qualification: '/studentQualification',
  students: '/students',
  subjects: '/subjects'
}

const Routes = () => (
    <Switch>
      <Redirect exact push from="/" to={Navigator.main} />
      <Route exact path={Navigator.main}>
        <h1>Main Section</h1>
        <p>Menu principal</p>
      </Route>
      <Route exact path={Navigator.grades}>
        <h1>Grades Section</h1>
        <p>Tabla de Grados</p>
      </Route>
      <Route exact path={Navigator.attendances}>
        <h1>Attendances Section</h1>
        <p>Tabla de Asistencias</p>
      </Route>
      <Route exact path={Navigator.subjects}>
        <h1>Subjects Section</h1>
        <p>Tabla de Materias</p>
      </Route>
      <Route exact path={Navigator.student_form}>
        <h1>Student Form Section</h1>
        <p>Formulario de Inscripción Alumno</p>
      </Route>
      <Route exact path={Navigator.reports}>
        <h1>Reports Section</h1>
      </Route>
      <Route exact path={Navigator.sign_in}>
        <h1>SignIn Section</h1>
      </Route>
      <Route exact path={`${Navigator.students}`}>
        <h1>Students Section</h1>
        <p>Tabla de Alumnos</p>
      </Route>
      <Route exact path={`${Navigator.students}/:id`}>
        <h1>Student Profile Section</h1>
        <p>Perfil del Estudiante</p>
      </Route>
      <Route exact path={`${Navigator.student_qualification}/:id`}>
        <h1>Student Qualification Section</h1>
        <p>Formulario con las calificaciones y observaciones del Estudiante</p>
      </Route>
    </Switch>
);

export default Routes;