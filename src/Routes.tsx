import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { NAVIGATOR } from './utils/constants';
import SignInScreen from './components/SignIn/SignInScreen';
import MainMenuScreen from './components/MainMenu/MainMenuScreen';
import StudentsManagementScreen from './components/StudentsManagement/StudentsManagementScreen';
import AttendancesManagementScreen from './components/AttendancesManagement/AttendancesManagementScreen';
import StudentQualificationManagementScreen from './components/StudentQualificationManagement/StudentQualificationManagementScreen';

const Routes = () => (
    <Switch>
      <Redirect exact push from="/" to={NAVIGATOR.main} />
      <Route exact path={NAVIGATOR.main}>
        <MainMenuScreen />
      </Route>
      <Route exact path={NAVIGATOR.attendances}>
        <AttendancesManagementScreen />
      </Route>
      <Route exact path={NAVIGATOR.student_form}>
        <h1>Student Form Section</h1>
        <p>Formulario de Inscripción Alumno</p>
      </Route>
      <Route exact path={NAVIGATOR.reports}>
        <h1>Reports Section</h1>
      </Route>
      <Route exact path={NAVIGATOR.sign_in}>
        <SignInScreen />
      </Route>
      <Route exact path={`${NAVIGATOR.students}`}>
        <StudentsManagementScreen />
      </Route>
      <Route exact path={`${NAVIGATOR.students}/:id`}>
        <h1>Student Profile Section</h1>
        <p>Perfil del Estudiante</p>
      </Route>
      <Route exact path={NAVIGATOR.student_qualification}>
        <StudentQualificationManagementScreen />
      </Route>
      <Route exact path={`${NAVIGATOR.student_qualification}/:id`}>
        <h1>Student Qualification Section</h1>
        <p>Formulario con las calificaciones y observaciones del Estudiante</p>
      </Route>
      <Route exact path={NAVIGATOR.forgot_password}>
        <h1>ForgotPassword Section</h1>
        <p>To be Develop</p>
      </Route>
    </Switch>
);

export default Routes;