import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';

import { NAVIGATOR } from './utils/constants';

import SignInScreen from './components/SignIn/SignInScreen';
import MainMenuScreen from './components/MainMenu/MainMenuScreen';
import StudentsManagementScreen from './components/StudentsManagement/StudentsManagementScreen';
import AttendancesManagementScreen from './components/AttendancesManagement/AttendancesManagementScreen';
import StudentQualificationManagementScreen from './components/StudentQualificationManagement/StudentQualificationManagementScreen';
import StudentProfile from './components/StudentProfile/StudentProfileScreen';
import ForgotPasswordScreen from './components/ForgotPassword/ForgotPasswordScreen';
import ReportsManagementScreen from './components/ReportsManagement/ReportsManagementScreen';
import StudentFormScreen from './components/StudentForm/StudentFormScreen';

import { AppContainer } from './components/UI/AppContainer';

const Routes = () => (
  <Router>
    <AppContainer>
      <Switch>
        <Redirect exact push from="/" to={NAVIGATOR.sign_in} />
        <Route exact path={NAVIGATOR.sign_in}>
          <SignInScreen />
        </Route>
        <Route exact path={NAVIGATOR.main}>
          <MainMenuScreen />
        </Route>
        <Route exact path={NAVIGATOR.attendances}>
          <AttendancesManagementScreen />
        </Route>
        <Route exact path={NAVIGATOR.student_form}>
          <StudentFormScreen />
        </Route>
        <Route exact path={NAVIGATOR.reports}>
          <ReportsManagementScreen />
        </Route>
        <Route exact path={`${NAVIGATOR.students}`}>
          <StudentsManagementScreen />
        </Route>
        <Route exact path={`${NAVIGATOR.students}/:id`}>
          <StudentProfile />
        </Route>
        <Route exact path={NAVIGATOR.student_qualification}>
          <StudentQualificationManagementScreen isTeacher={true} />
        </Route>
        {/* <Route exact path={`${NAVIGATOR.student_qualification}/:id`}>
        <StudentQualificationManagementScreen isTeacher={false} />
      </Route> */}
        <Route exact path={NAVIGATOR.forgot_password}>
          <ForgotPasswordScreen />
        </Route>
      </Switch>
    </AppContainer>
  </Router>
);

export default Routes;
