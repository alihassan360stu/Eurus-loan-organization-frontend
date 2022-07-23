import { ReduxStore } from "./reduxStore/ReduxStore";
import { Provider } from "react-redux";
import { AppBarMenu } from "./design/AppBar/AppBarMenu";
import { FrontPage } from "./design/frontPageDesign/FrontPage";
import { Routes, Route } from "react-router-dom";
import EurusFormSteps from "./design/eurusLoanForm/EurusFormSteps";
import AccountRegister from "./design/register/AccountRegister";
function App() {
  return (
    <Provider store={ReduxStore}>
      <AppBarMenu />
      <Routes>
        {/* <Route path="/" element={<FrontPage />} /> */}
      </Routes>

      <Routes>
        {/* <Route path="/register" element={<EurusFormSteps />} /> */}
      </Routes>

      <Routes>
        {/* <Route path="/extra" element={<AccountRegister />} /> */}
      </Routes>
    </Provider>
  );
}

export default App;