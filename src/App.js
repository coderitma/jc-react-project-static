import { BrowserRouter, Route, Routes } from "react-router-dom";
import { appName, EcommerceMain } from "./features/app.feature";
import { UserProfile, UserSignin } from "./features/user.feature";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={appName.ecommerce} element={<EcommerceMain />}>
          <Route index element={<UserSignin />} />
          <Route path="profile" element={<UserProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
